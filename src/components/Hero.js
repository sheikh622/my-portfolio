import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Chip,
    IconButton,
} from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const socialLinks = [
    {
        icon: <LinkedInIcon />,
        href: 'https://linkedin.com/in/muhammad-arslan-0624971b5',
        label: 'LinkedIn',
    },
    {
        icon: <GitHubIcon />,
        href: 'https://github.com/sheikh622',
        label: 'GitHub',
    },
    {
        icon: <EmailIcon />,
        href: 'mailto:arslansaleem622@gmail.com',
        label: 'Email',
    },
];

const tags = ['React.js', 'Next.js', 'TypeScript', 'Redux', 'GraphQL', 'REST APIs'];

export default function Hero() {
    const handleScrollDown = () => {
        document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box
            id="hero"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                pt: 10,
            }}
        >
            {/* Animated background blobs */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: '45%',
                    height: '60%',
                    background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.15) 0%, transparent 70%)',
                    animation: 'blobFloat1 8s ease-in-out infinite',
                    '@keyframes blobFloat1': {
                        '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                        '33%': { transform: 'translate(3%, 5%) scale(1.05)' },
                        '66%': { transform: 'translate(-2%, -3%) scale(0.97)' },
                    },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '5%',
                    right: '-5%',
                    width: '40%',
                    height: '55%',
                    background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                    animation: 'blobFloat2 10s ease-in-out infinite',
                    '@keyframes blobFloat2': {
                        '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                        '50%': { transform: 'translate(-4%, -6%) scale(1.08)' },
                    },
                }}
            />

            {/* Grid pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ maxWidth: 780 }}>
                    {/* Availability badge */}
                    <Box
                        sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 1,
                            px: 2,
                            py: 0.75,
                            borderRadius: '999px',
                            background: 'rgba(124, 58, 237, 0.12)',
                            border: '1px solid rgba(124, 58, 237, 0.25)',
                            mb: 3,
                        }}
                    >
                        <Box
                            sx={{
                                width: 8,
                                height: 8,
                                borderRadius: '50%',
                                background: '#22c55e',
                                boxShadow: '0 0 8px #22c55e',
                                animation: 'pulse 2s infinite',
                                '@keyframes pulse': {
                                    '0%, 100%': { opacity: 1 },
                                    '50%': { opacity: 0.4 },
                                },
                            }}
                        />
                        <Typography variant="body2" sx={{ color: 'primary.light', fontWeight: 500 }}>
                            Open to new opportunities · Lahore, Pakistan
                        </Typography>
                    </Box>

                    {/* Main heading */}
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.8rem' },
                            fontWeight: 800,
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            mb: 2,
                        }}
                    >
                        Hi, I'm{' '}
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #a78bfa 0%, #67e8f9 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Muhammad Arslan
                        </Box>
                    </Typography>

                    <Typography
                        variant="h2"
                        sx={{
                            fontSize: { xs: '1.3rem', sm: '1.6rem', md: '2rem' },
                            fontWeight: 600,
                            color: 'text.secondary',
                            mb: 3,
                            lineHeight: 1.4,
                        }}
                    >
                        Senior React Developer &{' '}
                        <Box component="span" sx={{ color: 'secondary.light' }}>
                            Frontend Engineer
                        </Box>
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            color: 'text.secondary',
                            mb: 4,
                            maxWidth: 620,
                            fontSize: '1.08rem',
                            lineHeight: 1.85,
                        }}
                    >
                        I build scalable, high-performance{' '}
                        <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}>
                            React & Next.js
                        </Box>{' '}
                        applications that are production-ready and built to grow with your business. With{' '}
                        <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}>
                            4+ years
                        </Box>{' '}
                        of experience, I specialize in clean architecture, TypeScript, REST & GraphQL API
                        integration, and pixel-perfect UI delivery. I don't just write code — I build
                        reliable systems that are easy to scale, maintain, and extend.
                    </Typography>

                    {/* Tag chips */}
                    <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 5 }}>
                        {tags.map((tag) => (
                            <Chip
                                key={tag}
                                label={tag}
                                size="small"
                                sx={{
                                    background: 'rgba(124, 58, 237, 0.1)',
                                    border: '1px solid rgba(124, 58, 237, 0.2)',
                                    color: 'primary.light',
                                    fontWeight: 500,
                                }}
                            />
                        ))}
                    </Stack>

                    {/* CTA Buttons */}
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 5 }}>
                        <Button
                            id="hero-view-projects"
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() =>
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                            }
                            sx={{ px: 5, py: 1.5, fontSize: '1rem' }}
                        >
                            View My Work
                        </Button>
                        <Button
                            id="hero-contact"
                            variant="outlined"
                            color="primary"
                            size="large"
                            onClick={() =>
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }
                            sx={{ px: 5, py: 1.5, fontSize: '1rem' }}
                        >
                            Get in Touch
                        </Button>
                    </Stack>

                    {/* Social Links */}
                    <Stack direction="row" spacing={1}>
                        {socialLinks.map((social) => (
                            <IconButton
                                key={social.label}
                                id={`hero-social-${social.label.toLowerCase()}`}
                                href={social.href}
                                target={social.href.startsWith('mailto') || social.href.startsWith('tel') ? undefined : '_blank'}
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                sx={{
                                    color: 'text.secondary',
                                    border: '1px solid rgba(255,255,255,0.08)',
                                    borderRadius: '10px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        color: 'primary.light',
                                        borderColor: 'rgba(124, 58, 237, 0.4)',
                                        background: 'rgba(124, 58, 237, 0.1)',
                                        transform: 'translateY(-3px)',
                                    },
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Stack>
                </Box>
            </Container>

            {/* Scroll down indicator */}
            <IconButton
                id="hero-scroll-down"
                onClick={handleScrollDown}
                sx={{
                    position: 'absolute',
                    bottom: 32,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    color: 'text.secondary',
                    border: '1px solid rgba(255,255,255,0.1)',
                    animation: 'scrollBounce 2s ease-in-out infinite',
                    '@keyframes scrollBounce': {
                        '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
                        '50%': { transform: 'translateX(-50%) translateY(8px)' },
                    },
                }}
            >
                <ArrowDownwardIcon />
            </IconButton>
        </Box>
    );
}
