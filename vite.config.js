import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: '/src', // Thư mục xuất đầu ra
    },
    base: '/',
    css: {
        modules: {
            generateScopedName: '[name]_[local]', // Tên file + Tên class
        },
    },
});
