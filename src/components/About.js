import React from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    Avatar,
    Chip,
    Stack,
} from '@mui/material';
import avatar from '../assets/avatar.png';

const skills = [
    { name: 'React.js / Next.js', level: 95, color: '#61dafb' },
    { name: 'TypeScript / JavaScript', level: 92, color: '#3178c6' },
    { name: 'Redux / Zustand / Context API', level: 90, color: '#764abc' },
    { name: 'REST APIs / GraphQL / WebSockets', level: 88, color: '#e535ab' },
    { name: 'Material UI / Bootstrap', level: 87, color: '#a78bfa' },
    { name: 'Git / Docker / Agile', level: 82, color: '#f97316' },
];

const stats = [
    { value: '4+', label: 'Years Experience', color: '#a78bfa' },
    { value: '10+', label: 'Projects Delivered', color: '#67e8f9' },
    { value: '2', label: 'Companies Led', color: '#34d399' },
    { value: '5+', label: 'Domains Covered', color: '#f59e0b' },
];

const tools = [
    'React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Redux',
    'Redux Saga', 'Context API', 'Zustand', 'GraphQL', 'REST APIs',
    'WebSockets', 'Material UI', 'Bootstrap', 'Reactstrap',
    'HTML5', 'CSS3', 'Git', 'Docker', 'Agile/Scrum', 'Neo4j', 'Parse',
];

export default function About() {
    return (
        <Box
            id="about"
            sx={{
                py: { xs: 10, md: 14 },
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Background accent */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-10%',
                    width: '35%',
                    height: '60%',
                    background: 'radial-gradient(ellipse, rgba(6, 182, 212, 0.07) 0%, transparent 70%)',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'primary.light',
                            letterSpacing: '0.15em',
                            fontWeight: 600,
                            mb: 1,
                            display: 'block',
                        }}
                    >
                        Who I Am
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, mb: 2 }}
                    >
                        About{' '}
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Me
                        </Box>
                    </Typography>
                    <Box
                        sx={{
                            width: 64,
                            height: 4,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                            mx: 'auto',
                        }}
                    />
                </Box>

                <Grid container spacing={4} alignItems="flex-start">
                    {/* Left: Avatar + Stats */}
                    <Grid item xs={12} md={4}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 3,
                            }}
                        >
                            {/* Avatar with spinning gradient border */}
                            <Box sx={{ position: 'relative' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: -4,
                                        borderRadius: '50%',
                                        background: 'linear-gradient(135deg, #7c3aed, #06b6d4)',
                                        zIndex: 0,
                                        animation: 'rotateBorder 4s linear infinite',
                                        '@keyframes rotateBorder': {
                                            from: { filter: 'hue-rotate(0deg)' },
                                            to: { filter: 'hue-rotate(360deg)' },
                                        },
                                    }}
                                />
                                <Avatar
                                    src={avatar}
                                    alt="Muhammad Arslan — Senior React Developer"
                                    sx={{
                                        width: 200,
                                        height: 200,
                                        position: 'relative',
                                        zIndex: 1,
                                        border: '4px solid #0a0a0f',
                                    }}
                                />
                            </Box>

                            {/* Stats Grid */}
                            <Grid container spacing={1.5} sx={{ width: '100%' }}>
                                {stats.map((stat) => (
                                    <Grid item xs={6} key={stat.label}>
                                        <Card
                                            sx={{
                                                textAlign: 'center',
                                                p: 1.5,
                                                background: 'rgba(19, 19, 26, 0.8)',
                                                border: '1px solid rgba(255,255,255,0.06)',
                                            }}
                                        >
                                            <Typography
                                                variant="h5"
                                                sx={{ fontWeight: 800, color: stat.color, lineHeight: 1 }}
                                            >
                                                {stat.value}
                                            </Typography>
                                            <Typography
                                                variant="caption"
                                                sx={{ color: 'text.secondary', lineHeight: 1.2 }}
                                            >
                                                {stat.label}
                                            </Typography>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>

                    {/* Right: Bio + Skills */}
                    <Grid item xs={12} md={8}>
                        <Stack spacing={4}>
                            {/* Bio */}
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
                                    Senior Frontend Engineer crafting production-grade web experiences
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2, fontSize: '1.05rem' }}
                                >
                                    I'm a Senior React Developer with 4+ years of hands-on experience building
                                    scalable, high-performance web applications. I specialise in{' '}
                                    <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}>
                                        React.js, Next.js, and TypeScript
                                    </Box>
                                    , with deep expertise in state management (Redux, Zustand, Context API),
                                    REST & GraphQL API integration, and WebSocket-driven real-time features.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2, fontSize: '1.05rem' }}
                                >
                                    I've led and contributed to frontend development across diverse domains —
                                    education management, AI-driven platforms, healthcare, and marketplace
                                    solutions — always with a commitment to{' '}
                                    <Box component="span" sx={{ color: 'secondary.light', fontWeight: 600 }}>
                                        clean architecture, reusable components, and pixel-perfect UI
                                    </Box>
                                    .
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.05rem' }}
                                >
                                    Beyond writing code, I bring leadership, Agile collaboration, and a
                                    product-minded approach — ensuring every solution is easy to scale,
                                    maintain, and extend. Based in Lahore, Pakistan, open to remote opportunities worldwide.
                                </Typography>
                            </Box>

                            {/* Skill Bars */}
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5 }}>
                                    Core Proficiencies
                                </Typography>
                                <Stack spacing={2}>
                                    {skills.map((skill) => (
                                        <Box key={skill.name}>
                                            <Box
                                                sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    mb: 0.75,
                                                }}
                                            >
                                                <Typography
                                                    variant="body2"
                                                    sx={{ fontWeight: 600, color: 'text.primary' }}
                                                >
                                                    {skill.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: skill.color, fontWeight: 700 }}
                                                >
                                                    {skill.level}%
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    height: 6,
                                                    borderRadius: 3,
                                                    background: 'rgba(255,255,255,0.06)',
                                                    overflow: 'hidden',
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        height: '100%',
                                                        width: skill.level + '%',
                                                        borderRadius: 3,
                                                        background: skill.color + '88',
                                                        boxShadow: '0 0 8px ' + skill.color + '66',
                                                        transition: 'width 1.5s ease',
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>

                            {/* Tools */}
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                                    Tools & Technologies
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                    {tools.map((tool) => (
                                        <Chip
                                            key={tool}
                                            label={tool}
                                            size="small"
                                            sx={{
                                                background: 'rgba(124, 58, 237, 0.08)',
                                                border: '1px solid rgba(124, 58, 237, 0.18)',
                                                color: 'text.secondary',
                                                fontWeight: 500,
                                                transition: 'all 0.2s ease',
                                                '&:hover': {
                                                    background: 'rgba(124, 58, 237, 0.18)',
                                                    color: 'primary.light',
                                                    borderColor: 'rgba(124, 58, 237, 0.4)',
                                                    transform: 'translateY(-2px)',
                                                },
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
