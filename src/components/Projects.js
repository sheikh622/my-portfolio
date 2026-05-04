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
            'A full-stack education management platform with role-based access for principals and teachers. Features include onboarding via email invitations, assessment creation, lesson and unit planning, and deep integration with Google Calendar and Gmail APIs.',
        tags: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Google APIs', 'RBAC'],
        category: 'Education',
        gradient: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
        role: 'Senior Software Engineer / Team Lead',
        featured: true,
    },
    {
        id: 'project-tabshura',
        title: 'Tabshura',
        description:
            'A comprehensive education management system for teachers, students, and parents — streamlining academic workflows, progress tracking, and communication across all school stakeholders. Built end-to-end with React, Node.js, and PostgreSQL.',
        tags: ['React.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'REST APIs'],
        category: 'Education',
        gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
        role: 'Full Stack Developer',
        featured: true,
    },
    {
        id: 'project-living-ai',
        title: 'Living-AI',
        description:
            'A scalable AI-driven full-stack application built with React, TypeScript, and Node.js. Focused on optimized component performance, strict code reusability, and a clean, maintainable architecture supporting AI-powered features and real-time inference.',
        tags: ['React.js', 'TypeScript', 'Node.js', 'AI Integration', 'WebSockets'],
        category: 'AI / Tech',
        gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        role: 'Full Stack Developer',
        featured: false,
    },
    {
        id: 'project-thdc',
        title: 'Total Health Dental Care',
        description:
            'A patient management system featuring online appointment booking, enhanced admin workflows, and an improved overall user experience for healthcare staff and patients. Includes secure REST APIs and role-based access control.',
        tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
        category: 'Healthcare',
        gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
        role: 'Full Stack Developer',
        featured: false,
    },
    {
        id: 'project-joblinxs',
        title: 'Joblinxs',
        description:
            'A freelance marketplace platform inspired by Upwork, enabling seamless interactions between clients and service providers through responsive UI components, dynamic listings, and real-time chat powered by WebSockets.',
        tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'WebSockets', 'Redux'],
        category: 'Marketplace',
        gradient: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
        role: 'Full Stack Developer',
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
                    'linear-gradient(180deg, transparent 0%, rgba(16, 185, 129, 0.04) 50%, transparent 100%)',
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
                    background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none',
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-8%',
                    width: '30%',
                    height: '40%',
                    background: 'radial-gradient(ellipse, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
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
                            letterSpacing: '0.18em',
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
                                background: 'linear-gradient(135deg, #60a5fa, #34d399)',
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
                            width: 72,
                            height: 4,
                            borderRadius: 2,
                            background: 'linear-gradient(90deg, #3b82f6, #10b981)',
                            mx: 'auto',
                            mb: 4,
                        }}
                    />

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
                            '& .Mui-selected': { color: '#34d399' },
                            '& .MuiTabs-indicator': {
                                background: 'linear-gradient(90deg, #3b82f6, #10b981)',
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
                                <Box sx={{ height: 4, background: project.gradient }} />

                                <Box
                                    sx={{
                                        height: 120,
                                        background: project.gradient,
                                        opacity: 0.12,
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
                                                        background: 'rgba(251, 191, 36, 0.15)',
                                                        border: '1px solid rgba(251, 191, 36, 0.35)',
                                                        color: '#fbbf24',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 600,
                                                    }}
                                                />
                                            )}
                                        </Box>
                                    </Stack>

                                    <Typography
                                        variant="caption"
                                        sx={{
                                            display: 'block',
                                            color: '#34d399',
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
