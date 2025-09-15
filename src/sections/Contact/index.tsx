'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';
import { motion } from 'framer-motion';

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
                            placeholder="Nome*" 
                            value={form.name} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Seu melhor email*" 
                            value={form.email} 
                            onChange={handleChange} 
                            required 
                        />
                        <input 
                            type="tel" 
                            name="phone" 
                            placeholder="Número de telefone (WhatsApp)" 
                            value={form.phone} 
                            onChange={handleChange} 
                        />
                        <textarea 
                            name="message" 
                            placeholder="Quer me enviar uma prévia do que gostaria de tratar em sessão? Fique a vontade para me contar!" 
                            value={form.message} 
                            onChange={handleChange} 
                        />
                    </div>
                    {status && <p className={styles.formDisclaimer}>{status}</p>}
                    <button className={styles.btnSubmit} type="submit" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar Email'}
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
              Se preferir um contato mais formal
            </h2>
        </motion.div>
      </div>
    </section>
  );
}
