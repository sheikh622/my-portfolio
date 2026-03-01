import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#7c3aed',
            light: '#a78bfa',
            dark: '#5b21b6',
        },
        secondary: {
            main: '#06b6d4',
            light: '#67e8f9',
            dark: '#0e7490',
        },
        background: {
            default: '#0a0a0f',
            paper: '#13131a',
        },
        text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", "Space Grotesk", sans-serif',
        h1: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
        },
        h2: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
        },
        h3: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
        },
        h4: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
        },
        h5: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
        },
        h6: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    borderRadius: 12,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)',
                    boxShadow: '0 4px 24px rgba(124, 58, 237, 0.35)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #6d28d9 0%, #9333ea 100%)',
                        boxShadow: '0 6px 32px rgba(124, 58, 237, 0.5)',
                        transform: 'translateY(-2px)',
                    },
                },
                outlinedPrimary: {
                    borderColor: 'rgba(124, 58, 237, 0.5)',
                    '&:hover': {
                        borderColor: '#7c3aed',
                        backgroundColor: 'rgba(124, 58, 237, 0.08)',
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(19, 19, 26, 0.8)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(124, 58, 237, 0.12)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        border: '1px solid rgba(124, 58, 237, 0.35)',
                        transform: 'translateY(-6px)',
                        boxShadow: '0 20px 60px rgba(124, 58, 237, 0.2)',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 8,
                },
            },
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
