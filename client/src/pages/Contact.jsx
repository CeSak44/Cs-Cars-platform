import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  Phone, MapPin, Clock, MessageCircle, Mail,
  CheckCircle2, ChevronRight, ArrowRight, Send,
  Users, Star, Shield, Award
} from 'lucide-react';

/* ─── Shared contact data (mirrored from Footer) ─────────────────────────── */
export const CONTACT_INFO = {
  phone:     '+213 540 433 297',
  phoneHref: 'tel:+213540433297',
  whatsapp:  'https://chat.whatsapp.com/Jad0I9rPW8SDr7Fb4RWCLl',
  telegram:  'https://t.me/CsCarsAgency',
  tiktok:    'https://www.tiktok.com/@cs_cars_19',
  mapUrl:    'https://maps.app.goo.gl/q1UATiLBRbzaeCaq6?g_st=aw',
  mapEmbed:  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3216.1!2d5.406!3d36.191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDExJzI3LjYiTiA1wrAyNCcyMS42IkU!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz',
};

/* ─── Animation variants ─────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

/* ─── TikTok SVG icon ────────────────────────────────────────────────────── */
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const TelegramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />
  </svg>
);

/* ─── Contact Page ───────────────────────────────────────────────────────── */
const Contact = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  /* form state */
  const [form, setForm] = useState({ name: '', phone: '', email: '', vehicle: '', message: '' });
  const [formState, setFormState] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('loading');
    /* Simulate async submission */
    await new Promise(r => setTimeout(r, 1800));
    setFormState('success');
  };

  /* trust cards */
  const trustCards = [
    { icon: <Users size={28} />, title: t('contact.trust.personal_title'), desc: t('contact.trust.personal_desc') },
    { icon: <Star size={28} />,  title: t('contact.trust.vehicles_title'), desc: t('contact.trust.vehicles_desc') },
    { icon: <Shield size={28} />, title: t('contact.trust.service_title'), desc: t('contact.trust.service_desc') },
    { icon: <Award size={28} />,  title: t('contact.trust.expertise_title'), desc: t('contact.trust.expertise_desc') },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative pt-36 pb-28 overflow-hidden">
        {/* animated gradient blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#F50101]/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#F50101]/5 blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_60%,#0a0a0a)]" />
          {/* grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }}
          />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="text-[#F50101] font-bold tracking-[0.3em] uppercase text-sm mb-4"
          >
            CS Cars · Sétif
          </motion.p>
          <motion.h1
            variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-none"
          >
            {t('contact.hero.title')}
          </motion.h1>
          <motion.p
            variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {t('contact.hero.subtitle')}
          </motion.p>

          {/* quick action pills */}
          <motion.div
            variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="mt-10 flex flex-wrap justify-center gap-4"
          >
            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-center gap-2 px-6 py-3 bg-[#F50101] hover:bg-[#cc0000] rounded-full text-white font-bold shadow-lg shadow-[#F50101]/20 transition-all hover:scale-105 text-sm"
            >
              <Phone size={16} /> {CONTACT_INFO.phone}
            </a>
            <a
              href={CONTACT_INFO.whatsapp} target="_blank" rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#1ebd5b] rounded-full text-white font-bold shadow-lg shadow-[#25D366]/20 transition-all hover:scale-105 text-sm"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ QUICK CONTACT CARDS ══════════════════ */}
      <section className="container mx-auto px-6 -mt-4 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            {
              icon: <Phone size={26} className="text-[#F50101]" />,
              label: t('contact.cards.phone'),
              value: CONTACT_INFO.phone,
              href: CONTACT_INFO.phoneHref,
              hoverColor: 'hover:border-[#F50101]/50',
            },
            {
              icon: <MessageCircle size={26} className="text-[#25D366]" />,
              label: 'WhatsApp',
              value: t('contact.cards.whatsapp_action'),
              href: CONTACT_INFO.whatsapp,
              hoverColor: 'hover:border-[#25D366]/50',
              external: true,
            },
            {
              icon: <Mail size={26} className="text-[#F50101]" />,
              label: 'Email',
              value: 'cscarsagency@gmail.com',
              href: 'mailto:cscarsagency@gmail.com',
              hoverColor: 'hover:border-[#F50101]/50',
            },
            {
              icon: <MapPin size={26} className="text-[#F50101]" />,
              label: t('contact.cards.location'),
              value: t('footer.location'),
              href: CONTACT_INFO.mapUrl,
              hoverColor: 'hover:border-[#F50101]/50',
              external: true,
            },
            {
              icon: <Clock size={26} className="text-[#F50101]" />,
              label: t('contact.cards.hours'),
              value: (
                <span className="space-y-0.5">
                  <span className="block">{t('contact.cards.hours_weekdays')}</span>
                  <span className="block text-gray-500 text-xs">{t('contact.cards.hours_sunday')}</span>
                </span>
              ),
              href: null,
              hoverColor: 'hover:border-[#F50101]/20',
            },
          ].map((card, i) => {
            const Wrapper = card.href ? 'a' : 'div';
            const wrapperProps = card.href
              ? { href: card.href, target: card.external ? '_blank' : undefined, rel: card.external ? 'noreferrer' : undefined }
              : {};

            return (
              <motion.div
                key={i}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`block h-full bg-[#111] border border-[#222] ${card.hoverColor} rounded-2xl p-6 text-center group transition-all duration-300 hover:bg-[#151515] hover:shadow-xl hover:-translate-y-1`}
                >
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform">{card.icon}</div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{card.label}</p>
                  <p className="text-white font-semibold text-sm leading-snug">{card.value}</p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════ FORM + SHOWROOM INFO ══════════════════ */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT — contact form */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#F50101] uppercase tracking-widest font-bold text-sm mb-2">{t('contact.form.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">{t('contact.form.title')}</h2>

            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#111] border border-[#25D366]/30 rounded-2xl p-12 text-center"
                >
                  <CheckCircle2 size={56} className="text-[#25D366] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{t('contact.form.success_title')}</h3>
                  <p className="text-gray-400">{t('contact.form.success_desc')}</p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ name: '', phone: '', email: '', vehicle: '', message: '' }); }}
                    className="mt-8 px-8 py-3 rounded-full bg-[#F50101] text-white font-bold hover:bg-[#cc0000] transition-colors"
                  >
                    {t('contact.form.send_another')}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="bg-[#111] border border-[#222] rounded-2xl p-8 space-y-5"
                >
                  {[
                    { name: 'name',    label: t('contact.form.full_name'),  type: 'text',  required: true },
                    { name: 'phone',   label: t('contact.form.phone'),      type: 'tel',   required: true },
                    { name: 'email',   label: t('contact.form.email'),      type: 'email', required: false },
                    { name: 'vehicle', label: t('contact.form.vehicle'),    type: 'text',  required: false },
                  ].map(field => (
                    <div key={field.name} className="group">
                      <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-1.5 group-focus-within:text-[#F50101] transition-colors">
                        {field.label}{field.required && <span className="text-[#F50101] ml-0.5">*</span>}
                      </label>
                      <input
                        name={field.name}
                        type={field.type}
                        value={form[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#F50101] text-white rounded-xl px-4 py-3 outline-none transition-all duration-300 placeholder:text-gray-600 text-sm"
                        placeholder={field.label}
                      />
                    </div>
                  ))}

                  <div className="group">
                    <label className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-1.5 group-focus-within:text-[#F50101] transition-colors">
                      {t('contact.form.message')}<span className="text-[#F50101] ml-0.5">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#F50101] text-white rounded-xl px-4 py-3 outline-none transition-all duration-300 placeholder:text-gray-600 text-sm resize-none"
                      placeholder={t('contact.form.message_placeholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'loading'}
                    className="w-full py-4 rounded-xl bg-[#F50101] hover:bg-[#cc0000] text-white font-bold text-base tracking-wide shadow-lg shadow-[#F50101]/20 hover:shadow-[#F50101]/30 transition-all flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {formState === 'loading' ? (
                      <><span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> {t('contact.form.sending')}</>
                    ) : (
                      <><Send size={18} /> {t('contact.form.submit')}</>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT — showroom info */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}>
            <p className="text-[#F50101] uppercase tracking-widest font-bold text-sm mb-2">{t('contact.showroom.eyebrow')}</p>
            <h2 className="text-3xl md:text-4xl font-black mb-8 tracking-tight">{t('contact.showroom.title')}</h2>

            <div className="bg-[#111] border border-[#222] rounded-2xl p-8 space-y-6 mb-6">
              {[
                { icon: <MapPin size={20} className="text-[#F50101] shrink-0 mt-0.5" />, label: t('contact.showroom.address'), value: <a href={CONTACT_INFO.mapUrl} target="_blank" rel="noreferrer" className="hover:text-[#F50101] transition-colors">{t('footer.location')}</a> },
                { icon: <Phone size={20} className="text-[#F50101] shrink-0" />, label: t('contact.showroom.phone'), value: <a href={CONTACT_INFO.phoneHref} className="hover:text-[#F50101] transition-colors">{CONTACT_INFO.phone}</a> },
                { icon: <Mail size={20} className="text-[#F50101] shrink-0" />, label: 'Email', value: <a href="mailto:cscarsagency@gmail.com" className="hover:text-[#F50101] transition-colors">cscarsagency@gmail.com</a> },
                { icon: <Clock size={20} className="text-[#F50101] shrink-0" />, label: t('contact.showroom.hours'), value: <span>{t('contact.cards.hours_weekdays')}<span className="text-gray-500 block text-sm">{t('contact.cards.hours_sunday')}</span></span> },
              ].map((row, i) => (
                <div key={i} className="flex items-start gap-4 pb-5 border-b border-[#1e1e1e] last:border-0 last:pb-0">
                  {row.icon}
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest font-bold mb-1">{row.label}</p>
                    <p className="text-white font-medium text-sm">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* social links */}
            <div className="bg-[#111] border border-[#222] rounded-2xl p-8">
              <p className="text-gray-500 uppercase tracking-widest font-bold text-xs mb-5">{t('footer.follow')}</p>
              <div className="flex gap-3">
                {[
                  { href: CONTACT_INFO.tiktok,   icon: <TikTokIcon />,         hover: 'hover:bg-[#F50101]', label: 'TikTok' },
                  { href: CONTACT_INFO.whatsapp, icon: <MessageCircle size={20} />, hover: 'hover:bg-[#25D366]', label: 'WhatsApp', external: true },
                  { href: CONTACT_INFO.telegram,  icon: <TelegramIcon />,       hover: 'hover:bg-[#0088cc]', label: 'Telegram', external: true },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className={`bg-[#1a1a1a] ${s.hover} p-3.5 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg flex items-center justify-center`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════ MAP ══════════════════ */}
      <section className="mb-24">
        <div className="container mx-auto px-6 mb-6 flex items-center justify-between flex-wrap gap-4">
          <div>
            <p className="text-[#F50101] uppercase tracking-widest font-bold text-sm mb-1">{t('contact.map.eyebrow')}</p>
            <h2 className="text-3xl font-black tracking-tight">{t('contact.map.title')}</h2>
          </div>
          <a
            href={CONTACT_INFO.mapUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-[#F50101] hover:bg-[#cc0000] rounded-full text-white font-bold text-sm shadow-lg shadow-[#F50101]/20 transition-all hover:scale-105"
          >
            <MapPin size={16} /> {t('contact.map.directions')}
          </a>
        </div>
        <div className="relative h-[420px] md:h-[500px] border-y border-[#1a1a1a] overflow-hidden">
          <iframe
            title="CS Cars Sétif Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26264.94769427168!2d5.367390!3d36.191400!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f31585a2a05489%3A0x4e27bfaf6cd4a2fb!2sS%C3%A9tif%2C%20Algeria!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
            className="w-full h-full grayscale"
            style={{ filter: 'grayscale(1) invert(1) contrast(0.8) brightness(0.8)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-0 pointer-events-none border-l border-r border-[#F50101]/10" />
        </div>
      </section>

      {/* ══════════════════ WHY CS CARS ══════════════════ */}
      <section className="container mx-auto px-6 mb-24">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-12">
          <p className="text-[#F50101] uppercase tracking-widest font-bold text-sm mb-2">{t('contact.trust.eyebrow')}</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">{t('contact.trust.title')}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustCards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.5}
              className="group bg-[#111] border border-[#222] hover:border-[#F50101]/40 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-[#151515] hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#F50101]/10 flex items-center justify-center text-[#F50101] group-hover:bg-[#F50101] group-hover:text-white transition-all duration-300">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 group-hover:text-[#F50101] transition-colors">{card.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════ FINAL CTA ══════════════════ */}
      <section className="container mx-auto px-6 pb-24">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] rounded-3xl p-10 md:p-16 text-center overflow-hidden"
        >
          {/* top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F50101] to-transparent" />
          {/* glow blob */}
          <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-[#F50101]/10 blur-[80px] rounded-full" />

          <p className="text-[#F50101] uppercase tracking-widest font-bold text-sm mb-4 relative">{t('contact.cta.eyebrow')}</p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 relative">{t('contact.cta.title')}</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto relative">{t('contact.cta.subtitle')}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 relative">
            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg"
            >
              <Phone size={20} /> {t('contact.cta.call')}
            </a>
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank" rel="noreferrer"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#1ebd5b] text-white rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"
            >
              <MessageCircle size={20} /> WhatsApp
            </a>
            <button
              onClick={() => navigate('/models')}
              className="flex items-center justify-center gap-3 px-8 py-4 bg-[#F50101] hover:bg-[#cc0000] text-white rounded-full font-bold text-base transition-all hover:scale-105 shadow-lg shadow-[#F50101]/20"
            >
              {t('nav.discover_models')} <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;
