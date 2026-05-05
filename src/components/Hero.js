import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Chip,
    IconButton,
    Grid,
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
        href: 'https://github.com/arslanmuhammad-dev',
        label: 'GitHub',
    },
    {
        icon: <EmailIcon />,
        href: 'mailto:arslansaleem622@gmail.com',
        label: 'Email',
    },
];

const tags = ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS'];

const codeLines = [
    { tokens: [{ t: 'const ', c: '#c084fc' }, { t: 'developer ', c: '#f8fafc' }, { t: '= ', c: '#94a3b8' }, { t: '{', c: '#94a3b8' }] },
    { tokens: [{ t: '  name: ', c: '#60a5fa' }, { t: '"Muhammad Arslan"', c: '#34d399' }, { t: ',', c: '#94a3b8' }] },
    { tokens: [{ t: '  role: ', c: '#60a5fa' }, { t: '"Full Stack Developer"', c: '#34d399' }, { t: ',', c: '#94a3b8' }] },
    { tokens: [{ t: '  experience: ', c: '#60a5fa' }, { t: '"5 years"', c: '#34d399' }, { t: ',', c: '#94a3b8' }] },
    { tokens: [{ t: '  stack: ', c: '#60a5fa' }, { t: '{', c: '#94a3b8' }] },
    { tokens: [{ t: '    frontend: ', c: '#60a5fa' }, { t: '[', c: '#94a3b8' }, { t: '"React"', c: '#34d399' }, { t: ', ', c: '#94a3b8' }, { t: '"Next.js"', c: '#34d399' }, { t: ', ', c: '#94a3b8' }, { t: '"TS"', c: '#34d399' }, { t: '],', c: '#94a3b8' }] },
    { tokens: [{ t: '    backend: ', c: '#60a5fa' }, { t: '[', c: '#94a3b8' }, { t: '"Node.js"', c: '#34d399' }, { t: ', ', c: '#94a3b8' }, { t: '"Express"', c: '#34d399' }, { t: ', ', c: '#94a3b8' }, { t: '"Mongo"', c: '#34d399' }, { t: '],', c: '#94a3b8' }] },
    { tokens: [{ t: '    cloud: ', c: '#60a5fa' }, { t: '[', c: '#94a3b8' }, { t: '"AWS"', c: '#34d399' }, { t: ', ', c: '#94a3b8' }, { t: '"Vercel"', c: '#34d399' }, { t: ', ', c: '#94a3b8' }, { t: '"Docker"', c: '#34d399' }, { t: '],', c: '#94a3b8' }] },
    { tokens: [{ t: '  ', c: '#94a3b8' }, { t: '},', c: '#94a3b8' }] },
    { tokens: [{ t: '  available: ', c: '#60a5fa' }, { t: 'true', c: '#fbbf24' }, { t: ',', c: '#94a3b8' }] },
    { tokens: [{ t: '};', c: '#94a3b8' }] },
];

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
                pt: { xs: 12, md: 10 },
                pb: { xs: 6, md: 0 },
            }}
        >
            {/* Animated background blobs */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '8%',
                    left: '-8%',
                    width: '50%',
                    height: '60%',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.18) 0%, transparent 70%)',
                    animation: 'blobFloat1 9s ease-in-out infinite',
                    '@keyframes blobFloat1': {
                        '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                        '33%': { transform: 'translate(4%, 6%) scale(1.08)' },
                        '66%': { transform: 'translate(-3%, -4%) scale(0.94)' },
                    },
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '0%',
                    right: '-8%',
                    width: '45%',
                    height: '60%',
                    background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.14) 0%, transparent 70%)',
                    animation: 'blobFloat2 11s ease-in-out infinite',
                    '@keyframes blobFloat2': {
                        '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                        '50%': { transform: 'translate(-5%, -7%) scale(1.1)' },
                    },
                }}
            />

            {/* Grid pattern */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                        'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
                    backgroundSize: '56px 56px',
                    maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                <Grid container spacing={{ xs: 6, md: 4 }} alignItems="center">
                    {/* Left: copy */}
                    <Grid item xs={12} md={7}>
                        <Box sx={{ animation: 'fadeInUp 0.8s ease-out both' }}>
                            {/* Availability badge */}
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 1,
                                    px: 2,
                                    py: 0.75,
                                    borderRadius: '999px',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    border: '1px solid rgba(16, 185, 129, 0.3)',
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: '50%',
                                        background: '#22c55e',
                                        boxShadow: '0 0 10px #22c55e',
                                        animation: 'pulse 2s infinite',
                                        '@keyframes pulse': {
                                            '0%, 100%': { opacity: 1 },
                                            '50%': { opacity: 0.4 },
                                        },
                                    }}
                                />
                                <Typography variant="body2" sx={{ color: '#34d399', fontWeight: 500 }}>
                                    Open to new opportunities · Lahore, Pakistan
                                </Typography>
                            </Box>

                            <Typography
                                variant="overline"
                                sx={{
                                    color: 'primary.light',
                                    letterSpacing: '0.18em',
                                    fontWeight: 600,
                                    display: 'block',
                                    mb: 1,
                                    animation: 'fadeInUp 0.9s ease-out both',
                                }}
                            >
                                Hi, I'm
                            </Typography>

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2.6rem', sm: '3.5rem', md: '4.6rem' },
                                    fontWeight: 800,
                                    lineHeight: 1.05,
                                    letterSpacing: '-0.03em',
                                    mb: 1.5,
                                    animation: 'fadeInUp 1s ease-out both',
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        background: 'linear-gradient(135deg, #60a5fa 0%, #34d399 100%)',
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
                                    fontSize: { xs: '1.4rem', sm: '1.7rem', md: '2.1rem' },
                                    fontWeight: 700,
                                    color: 'text.secondary',
                                    mb: 3,
                                    lineHeight: 1.4,
                                    animation: 'fadeInUp 1.1s ease-out both',
                                }}
                            >
                                Senior Software Engineer ·{' '}
                                <Box component="span" sx={{ color: '#34d399' }}>
                                    Full Stack Developer
                                </Box>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: 'text.secondary',
                                    mb: 4,
                                    maxWidth: 620,
                                    fontSize: '1.05rem',
                                    lineHeight: 1.85,
                                    animation: 'fadeInUp 1.2s ease-out both',
                                }}
                            >
                                I build production-ready full-stack applications end-to-end — from{' '}
                                <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}>
                                    React & Next.js
                                </Box>{' '}
                                interfaces to{' '}
                                <Box component="span" sx={{ color: '#34d399', fontWeight: 600 }}>
                                    Node.js & Express
                                </Box>{' '}
                                APIs, with{' '}
                                <Box component="span" sx={{ color: '#fbbf24', fontWeight: 600 }}>
                                    5 years
                                </Box>{' '}
                                of experience shipping products on AWS and Vercel. Clean architecture,
                                TypeScript end-to-end, and systems built to scale.
                            </Typography>

                            <Stack
                                direction="row"
                                flexWrap="wrap"
                                gap={1}
                                sx={{ mb: 4.5, animation: 'fadeInUp 1.3s ease-out both' }}
                            >
                                {tags.map((tag) => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            background: 'rgba(59, 130, 246, 0.08)',
                                            border: '1px solid rgba(59, 130, 246, 0.25)',
                                            color: 'primary.light',
                                            fontWeight: 500,
                                            transition: 'all 0.25s ease',
                                            '&:hover': {
                                                background: 'rgba(16, 185, 129, 0.12)',
                                                borderColor: 'rgba(16, 185, 129, 0.4)',
                                                color: '#34d399',
                                                transform: 'translateY(-2px)',
                                            },
                                        }}
                                    />
                                ))}
                            </Stack>

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                sx={{ mb: 4, animation: 'fadeInUp 1.4s ease-out both' }}
                            >
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

                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{ animation: 'fadeInUp 1.5s ease-out both' }}
                            >
                                {socialLinks.map((social) => (
                                    <IconButton
                                        key={social.label}
                                        id={`hero-social-${social.label.toLowerCase()}`}
                                        href={social.href}
                                        target={
                                            social.href.startsWith('mailto') || social.href.startsWith('tel')
                                                ? undefined
                                                : '_blank'
                                        }
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        sx={{
                                            color: 'text.secondary',
                                            border: '1px solid rgba(255,255,255,0.08)',
                                            borderRadius: '12px',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: 'primary.light',
                                                borderColor: 'rgba(59, 130, 246, 0.45)',
                                                background: 'rgba(59, 130, 246, 0.1)',
                                                transform: 'translateY(-3px)',
                                            },
                                        }}
                                    >
                                        {social.icon}
                                    </IconButton>
                                ))}
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Right: code window mockup */}
                    <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Box
                            sx={{
                                position: 'relative',
                                animation: 'fadeInUp 1.1s ease-out 0.2s both, float 6s ease-in-out 1.5s infinite',
                            }}
                        >
                            {/* Glow behind window */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: -20,
                                    background:
                                        'radial-gradient(ellipse, rgba(59, 130, 246, 0.25) 0%, rgba(16, 185, 129, 0.15) 40%, transparent 70%)',
                                    filter: 'blur(40px)',
                                    zIndex: 0,
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'relative',
                                    zIndex: 1,
                                    background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.95), rgba(11, 15, 26, 0.95))',
                                    border: '1px solid rgba(59, 130, 246, 0.25)',
                                    borderRadius: 3,
                                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(59, 130, 246, 0.1)',
                                    overflow: 'hidden',
                                    fontFamily: '"JetBrains Mono", "Fira Code", monospace',
                                }}
                            >
                                {/* Title bar */}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1.5,
                                        px: 2,
                                        py: 1.25,
                                        borderBottom: '1px solid rgba(255,255,255,0.06)',
                                        background: 'rgba(255,255,255,0.02)',
                                    }}
                                >
                                    <Stack direction="row" spacing={0.75}>
                                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }} />
                                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }} />
                                        <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#22c55e' }} />
                                    </Stack>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: 'text.secondary',
                                            fontFamily: 'inherit',
                                            ml: 1,
                                            fontSize: '0.78rem',
                                        }}
                                    >
                                        developer.ts
                                    </Typography>
                                </Box>

                                {/* Code body */}
                                <Box sx={{ p: 2.5, fontSize: '0.82rem', lineHeight: 1.85 }}>
                                    {codeLines.map((line, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                display: 'flex',
                                                gap: 1.5,
                                                opacity: 0,
                                                animation: `fadeInUp 0.4s ease-out ${0.4 + i * 0.08}s forwards`,
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    color: 'rgba(148, 163, 184, 0.4)',
                                                    width: 18,
                                                    textAlign: 'right',
                                                    userSelect: 'none',
                                                    flexShrink: 0,
                                                }}
                                            >
                                                {i + 1}
                                            </Box>
                                            <Box sx={{ whiteSpace: 'pre' }}>
                                                {line.tokens.map((tok, j) => (
                                                    <Box
                                                        key={j}
                                                        component="span"
                                                        sx={{ color: tok.c }}
                                                    >
                                                        {tok.t}
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
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
