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
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';
import avatar from '../assets/avatar.png';

const skillGroups = [
    {
        id: 'frontend',
        title: 'Frontend',
        icon: <WebIcon sx={{ fontSize: 22 }} />,
        color: '#60a5fa',
        accent: 'rgba(59, 130, 246, 0.15)',
        skills: [
            'React.js',
            'Next.js',
            'TypeScript',
            'JavaScript (ES6+)',
            'Redux / Redux Saga',
            'Zustand',
            'Context API',
            'Material UI',
            'Tailwind CSS',
            'Bootstrap',
            'HTML5 / CSS3',
        ],
    },
    {
        id: 'backend',
        title: 'Backend',
        icon: <StorageIcon sx={{ fontSize: 22 }} />,
        color: '#34d399',
        accent: 'rgba(16, 185, 129, 0.15)',
        skills: [
            'Node.js',
            'Express.js',
            'REST APIs',
            'GraphQL',
            'WebSockets',
            'JWT / OAuth',
            'MongoDB',
            'PostgreSQL',
            'MySQL',
            'Neo4j',
            'Parse',
        ],
    },
    {
        id: 'devops',
        title: 'DevOps & Cloud',
        icon: <CloudIcon sx={{ fontSize: 22 }} />,
        color: '#fbbf24',
        accent: 'rgba(251, 191, 36, 0.15)',
        skills: [
            'AWS (EC2, S3, Lambda)',
            'Vercel',
            'Docker',
            'CI/CD',
            'Git / GitHub',
            'Linux',
            'Nginx',
            'Agile / Scrum',
            'Postman',
            'Jira',
        ],
    },
];

const stats = [
    { value: '5', label: 'Years Experience', color: '#60a5fa' },
    { value: '15+', label: 'Projects Delivered', color: '#34d399' },
    { value: '2', label: 'Companies Led', color: '#fbbf24' },
    { value: 'Full', label: 'Stack Coverage', color: '#f472b6' },
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
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    right: '-10%',
                    width: '35%',
                    height: '60%',
                    background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '5%',
                    left: '-5%',
                    width: '30%',
                    height: '40%',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.07) 0%, transparent 70%)',
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
                            letterSpacing: '0.18em',
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
                                background: 'linear-gradient(135deg, #60a5fa, #34d399)',
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
                            width: 72,
                            height: 4,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #3b82f6, #10b981)',
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
                            <Box sx={{ position: 'relative' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        inset: -6,
                                        borderRadius: '50%',
                                        background:
                                            'conic-gradient(from 0deg, #3b82f6, #10b981, #fbbf24, #3b82f6)',
                                        zIndex: 0,
                                        animation: 'rotateBorder 6s linear infinite',
                                        '@keyframes rotateBorder': {
                                            from: { transform: 'rotate(0deg)' },
                                            to: { transform: 'rotate(360deg)' },
                                        },
                                    }}
                                />
                                <Avatar
                                    src={avatar}
                                    alt="Muhammad Arslan — Senior Software Engineer"
                                    sx={{
                                        width: 200,
                                        height: 200,
                                        position: 'relative',
                                        zIndex: 1,
                                        border: '4px solid #0b0f1a',
                                    }}
                                />
                            </Box>

                            <Grid container spacing={1.5} sx={{ width: '100%' }}>
                                {stats.map((stat) => (
                                    <Grid item xs={6} key={stat.label}>
                                        <Card
                                            sx={{
                                                textAlign: 'center',
                                                p: 1.75,
                                                background: 'rgba(17, 24, 39, 0.7)',
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

                    {/* Right: Bio + Skill Groups */}
                    <Grid item xs={12} md={8}>
                        <Stack spacing={4}>
                            <Box>
                                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, lineHeight: 1.3 }}>
                                    Senior Software Engineer building end-to-end web platforms
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2, fontSize: '1.05rem' }}
                                >
                                    I'm a Full Stack Developer with{' '}
                                    <Box component="span" sx={{ color: '#fbbf24', fontWeight: 600 }}>
                                        5 years
                                    </Box>{' '}
                                    of hands-on experience building scalable web applications. I work across the stack
                                    — designing{' '}
                                    <Box component="span" sx={{ color: 'primary.light', fontWeight: 600 }}>
                                        React & Next.js
                                    </Box>{' '}
                                    interfaces, building{' '}
                                    <Box component="span" sx={{ color: '#34d399', fontWeight: 600 }}>
                                        Node.js & Express
                                    </Box>{' '}
                                    APIs, modeling data in MongoDB and PostgreSQL, and shipping to AWS and Vercel.
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', lineHeight: 1.9, mb: 2, fontSize: '1.05rem' }}
                                >
                                    I've led and contributed to products across diverse domains — education
                                    management, AI-driven platforms, healthcare, and marketplaces — always with a
                                    commitment to{' '}
                                    <Box component="span" sx={{ color: '#34d399', fontWeight: 600 }}>
                                        clean architecture, reusable components, and pixel-perfect UI
                                    </Box>
                                    .
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: 'text.secondary', lineHeight: 1.9, fontSize: '1.05rem' }}
                                >
                                    Beyond writing code, I bring leadership, Agile collaboration, and a
                                    product-minded approach — ensuring every solution is easy to scale, maintain,
                                    and extend. Based in Lahore, Pakistan, open to remote opportunities worldwide.
                                </Typography>
                            </Box>

                            {/* Skill Groups */}
                            <Box>
                                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2.5 }}>
                                    Tech Stack
                                </Typography>
                                <Grid container spacing={2}>
                                    {skillGroups.map((group) => (
                                        <Grid item xs={12} sm={6} md={4} key={group.id}>
                                            <Card
                                                id={`skill-group-${group.id}`}
                                                sx={{
                                                    p: 2.5,
                                                    height: '100%',
                                                    background: 'rgba(17, 24, 39, 0.6)',
                                                    border: `1px solid ${group.color}22`,
                                                    transition: 'all 0.35s ease',
                                                    '&:hover': {
                                                        border: `1px solid ${group.color}66`,
                                                        boxShadow: `0 16px 40px ${group.color}22`,
                                                        transform: 'translateY(-6px)',
                                                    },
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: 1.25,
                                                        mb: 2,
                                                    }}
                                                >
                                                    <Box
                                                        sx={{
                                                            width: 40,
                                                            height: 40,
                                                            borderRadius: '10px',
                                                            background: group.accent,
                                                            color: group.color,
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                        }}
                                                    >
                                                        {group.icon}
                                                    </Box>
                                                    <Typography
                                                        variant="subtitle1"
                                                        sx={{
                                                            fontWeight: 700,
                                                            color: group.color,
                                                            letterSpacing: '0.02em',
                                                        }}
                                                    >
                                                        {group.title}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                                    {group.skills.map((skill) => (
                                                        <Chip
                                                            key={skill}
                                                            label={skill}
                                                            size="small"
                                                            sx={{
                                                                background: 'rgba(255,255,255,0.04)',
                                                                border: '1px solid rgba(255,255,255,0.06)',
                                                                color: 'text.secondary',
                                                                fontSize: '0.72rem',
                                                                fontWeight: 500,
                                                                transition: 'all 0.2s ease',
                                                                '&:hover': {
                                                                    background: group.accent,
                                                                    color: group.color,
                                                                    borderColor: `${group.color}55`,
                                                                },
                                                            }}
                                                        />
                                                    ))}
                                                </Box>
                                            </Card>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
