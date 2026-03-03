import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    TextField,
    Button,
    Stack,
    IconButton,
    Snackbar,
    Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';

const contactInfo = [
    {
        icon: <EmailIcon sx={{ color: '#a78bfa' }} />,
        label: 'Email',
        value: 'arslansaleem622@gmail.com',
        href: 'mailto:arslansaleem622@gmail.com',
    },
    {
        icon: <LocationOnIcon sx={{ color: '#34d399' }} />,
        label: 'Location',
        value: 'Lahore, Pakistan',
        href: null,
    },
    {
        icon: <LinkedInIcon sx={{ color: '#0A66C2' }} />,
        label: 'LinkedIn',
        value: 'muhammad-arslan-0624971b5',
        href: 'https://linkedin.com/in/muhammad-arslan-0624971b5',
    },
];

const socialLinks = [
    { icon: <GitHubIcon />, href: 'https://github.com/sheikh622', label: 'GitHub', color: '#e2e8f0' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/muhammad-arslan-0624971b5', label: 'LinkedIn', color: '#0A66C2' },
    { icon: <EmailIcon />, href: 'mailto:arslansaleem622@gmail.com', label: 'Email', color: '#a78bfa' },
];

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

export default function Contact() {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setSnackbar({ open: true, message: 'Please fill in all required fields.', severity: 'warning' });
            return;
        }
        setLoading(true);
        emailjs
            .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, { publicKey: EMAILJS_PUBLIC_KEY })
            .then(() => {
                setLoading(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setSnackbar({ open: true, message: "Message sent! I'll get back to you soon 🚀", severity: 'success' });
            })
            .catch(() => {
                setLoading(false);
                setSnackbar({ open: true, message: 'Oops! Something went wrong. Please try again.', severity: 'error' });
            });
    };

    const inputSx = {
        '& .MuiOutlinedInput-root': {
            background: 'rgba(255,255,255,0.03)',
            borderRadius: '12px',
            '& fieldset': { borderColor: 'rgba(255,255,255,0.08)' },
            '&:hover fieldset': { borderColor: 'rgba(124, 58, 237, 0.35)' },
            '&.Mui-focused fieldset': { borderColor: '#7c3aed' },
        },
        '& .MuiInputLabel-root': { color: 'text.secondary' },
        '& .MuiInputLabel-root.Mui-focused': { color: 'primary.light' },
        '& .MuiOutlinedInput-input': { color: 'text.primary' },
    };

    return (
        <Box id="contact" sx={{ py: { xs: 10, md: 14 }, position: 'relative', overflow: 'hidden' }}>
            <Box sx={{
                position: 'absolute', bottom: '-10%', left: '50%', transform: 'translateX(-50%)',
                width: '70%', height: '50%',
                background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.07) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: '0.15em', fontWeight: 600, mb: 1, display: 'block' }}>
                        Get in Touch
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, mb: 2 }}>
                        Let's{' '}
                        <Box component="span" sx={{ background: 'linear-gradient(135deg, #a78bfa, #67e8f9)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Work Together
                        </Box>
                    </Typography>
                    <Box sx={{ width: 64, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', mx: 'auto', mb: 2 }} />
                    <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 540, mx: 'auto', lineHeight: 1.8 }}>
                        Looking for a Senior React Developer who delivers clean, structured, and production-ready solutions? Let's build something impactful together.
                    </Typography>
                </Box>

                <Grid container spacing={4} alignItems="flex-start">
                    <Grid item xs={12} md={4}>
                        <Stack spacing={2}>
                            {contactInfo.map((info) => (
                                <Card
                                    key={info.label}
                                    component={info.href ? 'a' : 'div'}
                                    href={info.href || undefined}
                                    target={info.href && !info.href.startsWith('mailto') && !info.href.startsWith('tel') ? '_blank' : undefined}
                                    rel={info.href && !info.href.startsWith('mailto') && !info.href.startsWith('tel') ? 'noopener noreferrer' : undefined}
                                    sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 2, textDecoration: 'none', cursor: info.href ? 'pointer' : 'default' }}
                                >
                                    <Box sx={{ width: 44, height: 44, borderRadius: '12px', background: 'rgba(124, 58, 237, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        {info.icon}
                                    </Box>
                                    <Box sx={{ overflow: 'hidden' }}>
                                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>{info.label}</Typography>
                                        <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            {info.value}
                                        </Typography>
                                    </Box>
                                </Card>
                            ))}
                            <Card sx={{ p: 2.5 }}>
                                <Typography variant="body2" sx={{ fontWeight: 700, mb: 2, color: 'text.secondary' }}>Connect with me</Typography>
                                <Stack direction="row" spacing={1}>
                                    {socialLinks.map((social) => (
                                        <IconButton
                                            key={social.label}
                                            id={`contact-social-${social.label.toLowerCase()}`}
                                            href={social.href}
                                            target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            sx={{
                                                color: 'text.secondary', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', transition: 'all 0.3s ease',
                                                '&:hover': { color: social.color, borderColor: social.color, background: social.color + '18', transform: 'translateY(-3px)' },
                                            }}
                                        >
                                            {social.icon}
                                        </IconButton>
                                    ))}
                                </Stack>
                            </Card>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Card sx={{ p: { xs: 3, md: 5 } }}>
                            <form ref={formRef} onSubmit={handleSubmit} noValidate>
                                <Grid container spacing={2.5}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="contact-name" label="Your Name *" name="name" fullWidth value={formData.name} onChange={handleChange} sx={inputSx} />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField id="contact-email" label="Email Address *" name="email" type="email" fullWidth value={formData.email} onChange={handleChange} sx={inputSx} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="contact-subject" label="Subject" name="subject" fullWidth value={formData.subject} onChange={handleChange} sx={inputSx} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField id="contact-message" label="Message *" name="message" fullWidth multiline rows={5} value={formData.message} onChange={handleChange} sx={inputSx} />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button id="contact-submit" type="submit" variant="contained" color="primary" size="large" fullWidth endIcon={<SendIcon />} disabled={loading} sx={{ py: 1.75, fontSize: '1rem' }}>
                                            {loading ? 'Sending...' : 'Send Message'}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            <Snackbar open={snackbar.open} autoHideDuration={5000} onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity={snackbar.severity} onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))} sx={{ borderRadius: 3 }}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}
