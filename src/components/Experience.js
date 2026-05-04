import React from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Chip,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const experiences = [
    {
        id: 'exp-devflovv',
        type: 'work',
        company: 'Devflovv',
        location: 'Lahore, Pakistan',
        role: 'Senior Software Engineer / Team Lead',
        period: 'May 2023 – Present',
        current: true,
        color: '#3b82f6',
        highlights: [
            'Architect and ship full-stack applications end-to-end using React, Next.js, TypeScript on the frontend and Node.js / Express APIs on the backend.',
            'Design and integrate REST and GraphQL services backed by MongoDB, PostgreSQL, and Neo4j; build real-time features with WebSockets.',
            'Lead frontend and full-stack architecture decisions — reusable component systems, shared types, and maintainable codebases across multiple products.',
            'Deploy and operate production workloads on AWS and Vercel, with Docker for local parity and CI/CD pipelines for safe releases.',
            'Drive sprint planning, code reviews, and Agile ceremonies as team lead, mentoring engineers and partnering closely with UX/UI designers.',
        ],
        tags: ['React.js', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
        id: 'exp-argonteq',
        type: 'work',
        company: 'ArgonTeq',
        location: 'Arfa Karim Technology Park, Lahore',
        role: 'Software Engineer (Full Stack)',
        period: 'August 2021 – May 2023',
        current: false,
        color: '#10b981',
        highlights: [
            'Built responsive, interactive interfaces with React.js for diverse client products across multiple domains.',
            'Developed and consumed REST APIs, GraphQL endpoints, and WebSocket services — wiring up real-time features end-to-end.',
            'Managed complex application state using Redux, Redux Saga, Context API, and Zustand.',
            'Worked across the stack on Node.js services, debugged production issues, and shipped performance optimizations.',
            'Collaborated closely with backend teams to ensure clean contracts and seamless integration on every release.',
        ],
        tags: ['React.js', 'Node.js', 'REST APIs', 'GraphQL', 'WebSockets', 'Redux', 'Zustand'],
    },
    {
        id: 'edu-uol',
        type: 'education',
        company: 'The University of Lahore',
        location: 'Main Campus, Lahore',
        role: 'Bachelor of Science in Software Engineering',
        period: 'September 2017 – August 2021',
        current: false,
        color: '#fbbf24',
        highlights: [
            'Completed a four-year degree in Software Engineering with focus on web technologies and system design.',
            'Built foundational skills in algorithms, data structures, object-oriented programming, and software architecture.',
        ],
        tags: ['Software Engineering', 'Web Development', 'OOP', 'Data Structures'],
    },
];

export default function Experience() {
    return (
        <Box
            id="experience"
            sx={{
                py: { xs: 10, md: 14 },
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.04) 50%, transparent 100%)',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '-10%',
                    width: '35%',
                    height: '60%',
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 8 }}>
                    <Typography variant="overline" sx={{ color: 'primary.light', letterSpacing: '0.18em', fontWeight: 600, mb: 1, display: 'block' }}>
                        My Journey
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, mb: 2 }}>
                        Experience &{' '}
                        <Box component="span" sx={{ background: 'linear-gradient(135deg, #60a5fa, #34d399)', backgroundClip: 'text', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            Education
                        </Box>
                    </Typography>
                    <Box sx={{ width: 72, height: 4, borderRadius: 2, background: 'linear-gradient(90deg, #3b82f6, #10b981)', mx: 'auto' }} />
                </Box>

                {/* Timeline */}
                <Box sx={{ position: 'relative', maxWidth: 820, mx: 'auto' }}>
                    {/* Vertical line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: { xs: 20, md: 32 },
                            top: 0,
                            bottom: 0,
                            width: 2,
                            background: 'linear-gradient(180deg, #3b82f6, #10b981, rgba(59, 130, 246, 0.1))',
                            borderRadius: 1,
                        }}
                    />

                    <Stack spacing={5}>
                        {experiences.map((exp) => (
                            <Box
                                key={exp.id}
                                id={exp.id}
                                sx={{ display: 'flex', gap: { xs: 3, md: 5 }, alignItems: 'flex-start', pl: { xs: 0, md: 0 } }}
                            >
                                {/* Timeline dot */}
                                <Box
                                    sx={{
                                        flexShrink: 0,
                                        width: { xs: 42, md: 66 },
                                        display: 'flex',
                                        justifyContent: 'center',
                                        position: 'relative',
                                        zIndex: 1,
                                        pt: 0.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 44,
                                            height: 44,
                                            borderRadius: '12px',
                                            background: exp.color + '22',
                                            border: '2px solid ' + exp.color + '55',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            boxShadow: '0 0 16px ' + exp.color + '33',
                                            transition: 'all 0.35s ease',
                                            '&:hover': { boxShadow: '0 0 28px ' + exp.color + '77', transform: 'scale(1.1)' },
                                        }}
                                    >
                                        {exp.type === 'work'
                                            ? <WorkIcon sx={{ fontSize: 20, color: exp.color }} />
                                            : <SchoolIcon sx={{ fontSize: 20, color: exp.color }} />
                                        }
                                    </Box>
                                </Box>

                                {/* Content card */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        background: 'rgba(17, 24, 39, 0.7)',
                                        backdropFilter: 'blur(16px)',
                                        border: '1px solid rgba(59, 130, 246, 0.1)',
                                        borderRadius: 3,
                                        p: { xs: 2.5, md: 3.5 },
                                        transition: 'all 0.35s ease',
                                        '&:hover': {
                                            border: '1px solid ' + exp.color + '55',
                                            boxShadow: '0 16px 48px ' + exp.color + '22',
                                            transform: 'translateX(6px)',
                                        },
                                    }}
                                >
                                    {/* Header row */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
                                                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1.3 }}>
                                                    {exp.company}
                                                </Typography>
                                                {exp.current && (
                                                    <Box
                                                        sx={{
                                                            display: 'inline-flex',
                                                            alignItems: 'center',
                                                            gap: 0.5,
                                                            px: 1.25,
                                                            py: 0.25,
                                                            borderRadius: '999px',
                                                            background: 'rgba(34, 197, 94, 0.12)',
                                                            border: '1px solid rgba(34, 197, 94, 0.3)',
                                                        }}
                                                    >
                                                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 6px #22c55e', animation: 'pulse 2s infinite', '@keyframes pulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.4 } } }} />
                                                        <Typography variant="caption" sx={{ color: '#22c55e', fontWeight: 600 }}>Current</Typography>
                                                    </Box>
                                                )}
                                            </Box>
                                            <Typography variant="body2" sx={{ color: exp.color, fontWeight: 600, mt: 0.25 }}>
                                                {exp.role}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                                            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500, display: 'block' }}>
                                                {exp.period}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: 'text.secondary', opacity: 0.7 }}>
                                                {exp.location}
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Highlights */}
                                    <Stack spacing={0.75} sx={{ mt: 2, mb: 2.5 }}>
                                        {exp.highlights.map((point, i) => (
                                            <Box key={i} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                                                <Box sx={{ width: 5, height: 5, borderRadius: '50%', background: exp.color, mt: 0.85, flexShrink: 0 }} />
                                                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.75, fontSize: '0.9rem' }}>
                                                    {point}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Stack>

                                    {/* Tags */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                        {exp.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    background: exp.color + '14',
                                                    border: '1px solid ' + exp.color + '30',
                                                    color: exp.color,
                                                    fontSize: '0.7rem',
                                                    fontWeight: 600,
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}
