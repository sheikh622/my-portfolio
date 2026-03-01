import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    IconButton,
    Divider,
    Stack,
    Button,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

const socials = [
    { icon: <GitHubIcon />, href: 'https://github.com/sheikh622', label: 'GitHub' },
    { icon: <LinkedInIcon />, href: 'https://linkedin.com/in/muhammad-arslan-0624971b5', label: 'LinkedIn' },
    { icon: <EmailIcon />, href: 'mailto:arslansaleem622@gmail.com', label: 'Email' },
];

export default function Footer() {
    const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <Box component="footer" sx={{ background: 'rgba(10, 10, 15, 0.97)', borderTop: '1px solid rgba(124, 58, 237, 0.12)', pt: 8, pb: 4, position: 'relative' }}>
            <Box sx={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)' }}>
                <IconButton
                    id="footer-scroll-top"
                    onClick={handleScrollTop}
                    aria-label="Scroll to top"
                    sx={{
                        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                        color: '#fff',
                        boxShadow: '0 4px 20px rgba(124, 58, 237, 0.5)',
                        width: 44,
                        height: 44,
                        '&:hover': { background: 'linear-gradient(135deg, #6d28d9, #9333ea)', transform: 'translateY(-3px)', boxShadow: '0 6px 24px rgba(124, 58, 237, 0.65)' },
                        transition: 'all 0.3s ease',
                    }}
                >
                    <KeyboardArrowUpIcon />
                </IconButton>
            </Box>

            <Container maxWidth="lg">
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={5}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                            <Box sx={{ width: 36, height: 36, borderRadius: '10px', background: 'linear-gradient(135deg, #7c3aed, #a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <CodeIcon sx={{ fontSize: 20, color: '#fff' }} />
                            </Box>
                            <Typography
                                variant="h6"
                                sx={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 700, background: 'linear-gradient(90deg, #a78bfa, #67e8f9)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                            >
                                Muhammad Arslan
                            </Typography>
                        </Box>
                        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, maxWidth: 320 }}>
                            Senior React Developer & Frontend Engineer building scalable, high-performance web applications with React.js, Next.js, and TypeScript.
                        </Typography>
                    </Grid>

                    <Grid item xs={6} md={3}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', letterSpacing: '0.05em' }}>
                            Navigation
                        </Typography>
                        <Stack spacing={1.5}>
                            {footerLinks.map((link) => (
                                <Button
                                    key={link.label}
                                    id={`footer-link-${link.label.toLowerCase()}`}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    sx={{ color: 'text.secondary', justifyContent: 'flex-start', p: 0, minWidth: 0, fontWeight: 500, '&:hover': { color: 'primary.light', background: 'transparent' } }}
                                >
                                    {link.label}
                                </Button>
                            ))}
                        </Stack>
                    </Grid>

                    <Grid item xs={6} md={4}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2, color: 'text.primary', letterSpacing: '0.05em' }}>
                            Connect
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            {socials.map((social) => (
                                <IconButton
                                    key={social.label}
                                    id={`footer-social-${social.label.toLowerCase()}`}
                                    href={social.href}
                                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    sx={{
                                        color: 'text.secondary', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', transition: 'all 0.3s ease',
                                        '&:hover': { color: 'primary.light', borderColor: 'rgba(124, 58, 237, 0.4)', background: 'rgba(124, 58, 237, 0.1)', transform: 'translateY(-3px)' },
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Stack>
                    </Grid>
                </Grid>

                <Divider sx={{ borderColor: 'rgba(255,255,255,0.06)', mb: 4 }} />

                <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        © {new Date().getFullYear()} Muhammad Arslan. All rights reserved.
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', display: 'flex', alignItems: 'center', gap: 0.75 }}>
                        Made with <FavoriteIcon sx={{ fontSize: 14, color: '#f43f5e', mx: 0.25 }} /> using React & MUI
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
}
