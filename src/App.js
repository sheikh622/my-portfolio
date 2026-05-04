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
            main: '#3b82f6',
            light: '#60a5fa',
            dark: '#2563eb',
        },
        secondary: {
            main: '#10b981',
            light: '#34d399',
            dark: '#059669',
        },
        background: {
            default: '#0b0f1a',
            paper: '#111827',
        },
        text: {
            primary: '#f8fafc',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: '"Inter", "JetBrains Mono", "Space Grotesk", sans-serif',
        h1: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 800,
        },
        h2: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 800,
        },
        h3: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
        },
        h4: {
            fontFamily: '"Space Grotesk", sans-serif',
            fontWeight: 700,
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
        borderRadius: 14,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    borderRadius: 12,
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
                    boxShadow: '0 6px 24px rgba(59, 130, 246, 0.35)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #2563eb 0%, #059669 100%)',
                        boxShadow: '0 10px 32px rgba(16, 185, 129, 0.45)',
                        transform: 'translateY(-2px)',
                    },
                },
                outlinedPrimary: {
                    borderColor: 'rgba(59, 130, 246, 0.5)',
                    '&:hover': {
                        borderColor: '#60a5fa',
                        backgroundColor: 'rgba(59, 130, 246, 0.08)',
                        transform: 'translateY(-2px)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    background: 'rgba(17, 24, 39, 0.7)',
                    backdropFilter: 'blur(18px)',
                    border: '1px solid rgba(59, 130, 246, 0.12)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                        border: '1px solid rgba(16, 185, 129, 0.35)',
                        transform: 'translateY(-8px)',
                        boxShadow: '0 24px 60px rgba(59, 130, 246, 0.18), 0 8px 32px rgba(16, 185, 129, 0.12)',
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
