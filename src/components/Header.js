import React, { useState, useEffect } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useScrollTrigger,
    Slide,
    Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CodeIcon from '@mui/icons-material/Code';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setDrawerOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <HideOnScroll>
                <AppBar
                    position="fixed"
                    elevation={0}
                    sx={{
                        background: scrolled
                            ? 'rgba(10, 10, 15, 0.85)'
                            : 'transparent',
                        backdropFilter: scrolled ? 'blur(20px)' : 'none',
                        borderBottom: scrolled
                            ? '1px solid rgba(124, 58, 237, 0.15)'
                            : 'none',
                        transition: 'all 0.4s ease',
                    }}
                >
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{ py: 1 }}>
                            {/* Logo */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexGrow: 1 }}>
                                <Box
                                    sx={{
                                        width: 36,
                                        height: 36,
                                        borderRadius: '10px',
                                        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)',
                                    }}
                                >
                                    <CodeIcon sx={{ fontSize: 20, color: '#fff' }} />
                                </Box>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontFamily: '"Space Grotesk", sans-serif',
                                        fontWeight: 700,
                                        background: 'linear-gradient(90deg, #a78bfa, #67e8f9)',
                                        backgroundClip: 'text',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    Muhammad Arslan
                                </Typography>
                            </Box>

                            {/* Desktop Nav */}
                            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1, alignItems: 'center' }}>
                                {navLinks.map((link) => (
                                    <Button
                                        key={link.label}
                                        id={`nav-${link.label.toLowerCase()}`}
                                        onClick={() => handleNavClick(link.href)}
                                        sx={{
                                            color: 'text.secondary',
                                            px: 2,
                                            '&:hover': {
                                                color: 'primary.light',
                                                background: 'rgba(124, 58, 237, 0.08)',
                                            },
                                        }}
                                    >
                                        {link.label}
                                    </Button>
                                ))}
                                <Button
                                    id="nav-hire-me"
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    href="mailto:arslansaleem622@gmail.com"
                                    sx={{ ml: 1, px: 3 }}
                                >
                                    Hire Me
                                </Button>
                            </Box>

                            {/* Mobile Menu Icon */}
                            <IconButton
                                id="mobile-menu-toggle"
                                sx={{ display: { xs: 'flex', md: 'none' }, color: 'text.primary' }}
                                onClick={() => setDrawerOpen(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>

            {/* Mobile Drawer */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{
                    sx: {
                        width: 280,
                        background: 'rgba(13, 13, 20, 0.97)',
                        backdropFilter: 'blur(20px)',
                        borderLeft: '1px solid rgba(124, 58, 237, 0.2)',
                        px: 2,
                        pt: 2,
                    },
                }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                    <IconButton
                        id="mobile-menu-close"
                        onClick={() => setDrawerOpen(false)}
                        sx={{ color: 'text.secondary' }}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                <List>
                    {navLinks.map((link) => (
                        <ListItem key={link.label} disablePadding>
                            <ListItemButton
                                id={`mobile-nav-${link.label.toLowerCase()}`}
                                onClick={() => handleNavClick(link.href)}
                                sx={{
                                    borderRadius: 2,
                                    mb: 0.5,
                                    '&:hover': { background: 'rgba(124, 58, 237, 0.12)' },
                                }}
                            >
                                <ListItemText
                                    primary={link.label}
                                    primaryTypographyProps={{ fontWeight: 600, color: 'text.primary' }}
                                />
                            </ListItemButton>
                        </ListItem>
                    ))}
                    <ListItem sx={{ mt: 2 }}>
                        <Button
                            id="mobile-nav-hire-me"
                            fullWidth
                            variant="contained"
                            color="primary"
                            href="mailto:arslansaleem622@gmail.com"
                        >
                            Hire Me
                        </Button>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}
