import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    Chip,
    Stack,
    Tab,
    Tabs,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import StarIcon from '@mui/icons-material/Star';

const categories = ['All', 'Education', 'AI / Tech', 'Healthcare', 'Marketplace'];

const projects = [
    {
        id: 'project-lamppost',
        title: 'Lamppost',
        description:
            'An education management platform with role-based access for principals and teachers. Features include onboarding via email invitations, assessment creation, lesson planning, unit planning, and deep integration with Google Calendar and Gmail APIs.',
        tags: ['React.js', 'TypeScript', 'Redux', 'Google APIs', 'RBAC'],
        category: 'Education',
        gradient: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
        role: 'Team Lead / Senior Frontend Developer',
        featured: true,
    },
    {
        id: 'project-tabshura',
        title: 'Tabshura',
        description:
            'A comprehensive education management system built for teachers, students, and parents — streamlining academic workflows, progress tracking, and communication across all school stakeholders.',
        tags: ['React.js', 'TypeScript', 'REST APIs', 'Material UI'],
        category: 'Education',
        gradient: 'linear-gradient(135deg, #0ea5e9 0%, #67e8f9 100%)',
        role: 'Frontend Developer',
        featured: true,
    },
    {
        id: 'project-living-ai',
        title: 'Living-AI',
        description:
            'A scalable AI-driven frontend application built with React.js and TypeScript. Focused on optimized component performance, strict code reusability, and a clean, maintainable architecture to support AI-powered features.',
        tags: ['React.js', 'TypeScript', 'AI Integration', 'Performance'],
        category: 'AI / Tech',
        gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)',
        role: 'Frontend Developer',
        featured: false,
    },
    {
        id: 'project-thdc',
        title: 'Total Health Dental Care',
        description:
            'A patient management system featuring online appointment booking, enhanced admin workflows, and an improved overall user experience for healthcare staff and patients.',
        tags: ['React.js', 'REST APIs', 'Redux', 'Bootstrap'],
        category: 'Healthcare',
        gradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
        role: 'Frontend Developer',
        featured: false,
    },
    {
        id: 'project-joblinxs',
        title: 'Joblinxs',
        description:
            'A freelance marketplace platform inspired by Upwork, enabling seamless interactions between clients and service providers through responsive UI components, dynamic listings, and real-time communication features.',
        tags: ['React.js', 'Redux', 'WebSockets', 'REST APIs'],
        category: 'Marketplace',
        gradient: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)',
        role: 'Frontend Developer',
        featured: false,
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState(0);

    const filtered =
        activeTab === 0
            ? projects
            : projects.filter((p) => p.category === categories[activeTab]);

    return (
        <Box
            id="projects"
            sx={{
                py: { xs: 10, md: 14 },
                background:
                    'linear-gradient(180deg, transparent 0%, rgba(124, 58, 237, 0.03) 50%, transparent 100%)',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '-8%',
                    width: '30%',
                    height: '40%',
                    background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />

            <Container maxWidth="lg">
                {/* Section Header */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
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
                        What I've Built
                    </Typography>
                    <Typography
                        variant="h2"
                        sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, mb: 2 }}
                    >
                        Featured{' '}
                        <Box
                            component="span"
                            sx={{
                                background: 'linear-gradient(135deg, #a78bfa, #67e8f9)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            Projects
                        </Box>
                    </Typography>
                    <Box
                        sx={{
                            width: 64,
                            height: 4,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                            mx: 'auto',
                            mb: 4,
                        }}
                    />

                    {/* Category Tabs */}
                    <Tabs
                        value={activeTab}
                        onChange={(_, v) => setActiveTab(v)}
                        centered
                        variant="scrollable"
                        scrollButtons="auto"
                        sx={{
                            '& .MuiTab-root': {
                                color: 'text.secondary',
                                fontWeight: 600,
                                textTransform: 'none',
                                minWidth: 80,
                            },
                            '& .Mui-selected': { color: 'primary.light' },
                            '& .MuiTabs-indicator': {
                                background: 'linear-gradient(90deg, #7c3aed, #a855f7)',
                                borderRadius: 2,
                                height: 3,
                            },
                        }}
                    >
                        {categories.map((cat, i) => (
                            <Tab
                                key={cat}
                                id={`projects-tab-${cat.toLowerCase().replace(/\s|\//g, '-')}`}
                                label={cat}
                                value={i}
                            />
                        ))}
                    </Tabs>
                </Box>

                <Grid container spacing={3}>
                    {filtered.map((project) => (
                        <Grid item xs={12} sm={6} lg={4} key={project.id}>
                            <Card
                                id={project.id}
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    position: 'relative',
                                    overflow: 'hidden',
                                }}
                            >
                                {/* Top gradient bar */}
                                <Box sx={{ height: 4, background: project.gradient }} />

                                {/* Subtle gradient overlay */}
                                <Box
                                    sx={{
                                        height: 120,
                                        background: project.gradient,
                                        opacity: 0.1,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        pointerEvents: 'none',
                                    }}
                                />

                                <CardContent sx={{ flex: 1, pt: 3 }}>
                                    <Stack
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                        sx={{ mb: 1.5 }}
                                    >
                                        <Box sx={{ flex: 1, pr: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 700, lineHeight: 1.3, mb: 0.5 }}
                                            >
                                                {project.title}
                                            </Typography>
                                            {project.featured && (
                                                <Chip
                                                    label="Featured"
                                                    size="small"
                                                    icon={<StarIcon sx={{ fontSize: '12px !important' }} />}
                                                    sx={{
                                                        background: 'rgba(124, 58, 237, 0.15)',
                                                        border: '1px solid rgba(124, 58, 237, 0.3)',
                                                        color: 'primary.light',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Stack>

                                    {/* Role badge */}
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            color: 'secondary.light',
                                            fontWeight: 600,
                                            mb: 1.5,
                                            fontSize: '0.75rem',
                                            letterSpacing: '0.02em',
                                        }}
                                    >
                                        {project.role}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: 'text.secondary',
                                            lineHeight: 1.75,
                                            mb: 2.5,
                                            fontSize: '0.88rem',
                                        }}
                                    >
                                        {project.description}
                                    </Typography>

                                    {/* Tags */}
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                        {project.tags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    background: 'rgba(255,255,255,0.04)',
                                                    border: '1px solid rgba(255,255,255,0.08)',
                                                    color: 'text.secondary',
                                                    fontSize: '0.7rem',
                                                    fontWeight: 500,
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </CardContent>

                                <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
                                    <Button
                                        id={`${project.id}-details`}
                                        size="small"
                                        variant="contained"
                                        endIcon={<OpenInNewIcon />}
                                        onClick={() =>
                                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                                        }
                                        sx={{ ml: 'auto !important', px: 2.5 }}
                                    >
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* GitHub CTA */}
                <Box sx={{ textAlign: 'center', mt: 7 }}>
                    <Button
                        id="projects-view-github"
                        variant="outlined"
                        color="primary"
                        size="large"
                        startIcon={<GitHubIcon />}
                        href="https://github.com/sheikh622"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ px: 5, py: 1.5 }}
                    >
                        View More on GitHub
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
