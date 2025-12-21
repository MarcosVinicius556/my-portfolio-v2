'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';
import { motion } from 'framer-motion';
import { useTranslation } from '@/app/i18n/useTranslation';

export default function Contact() {
  const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        objective: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('✅ Mensagem enviada com sucesso!');
                setForm({ name: '', email: '', phone: '', objective: '', message: '' });
            } else {
                setStatus(`❌ Erro: ${data.error || 'Não foi possível enviar.'}`);
            }
        } catch {
            setStatus('❌ Erro ao enviar mensagem.');
        } finally {
            setLoading(false);
        }
    };

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  } as const;

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 120, damping: 20 } },
  } as const;

  const translations = useTranslation();

  return (
    <section id='contact' className={styles.emailSection}>
        <div className={styles.container}>
        

        <div className={styles.emailContainer}>
          
          <motion.div
              className={`${styles.emailPanel}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={leftVariant}
            >
            <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <div className={styles.formGrid}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder={translations.contact.placeholders.name}
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder={translations.contact.placeholders.email}
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder={translations.contact.placeholders.phone}
                            value={form.phone} 
                            onChange={handleChange} 
                        />
                        <textarea 
                            name="message" 
                            placeholder={translations.contact.placeholders.message} 
                            value={form.message} 
                            onChange={handleChange} 
                        />
                    </div>
                    {status && <p className={styles.formDisclaimer}>{status}</p>}
                    <button className={styles.btnSubmit} type="submit" disabled={loading}>
                        {loading ? translations.contact.ctaLoading : translations.contact.cta}
                    </button>
                </form>
          </motion.div>

        </div>
          <motion.div
                className={styles.textContent}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={rightVariant}
              >
            <h2 className={styles.title}>
              {translations.contact.title}
            </h2>
        </motion.div>
      </div>
    </section>
  );
}
