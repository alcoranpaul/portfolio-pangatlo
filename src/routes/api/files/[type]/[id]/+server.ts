import { PORTFOLIO_FILES } from '$env/static/private';
import { readFile } from 'fs/promises';
import { marked } from 'marked';
import { join } from 'path';

marked.use({
    renderer: {
        heading({ text, depth }) {
            const plainText = text.replace(/<[^>]+>/g, '').replace(/&amp;/g, 'and');
            const id = plainText.toLowerCase().replace(/[^\w\s]+/g, '').replace(/\s+/g, '-').trim();
            return `<h${depth} id="${id}">${text}</h${depth}>`;
        }
    }
});

export async function GET({ params }) {
    const { type, id } = params;
    const isMarkdown = type === 'markdown';

    const cleanId = id.replace(/\.(png|jpg|jpeg|gif|webp|md)$/, '');
    const filePath = join(PORTFOLIO_FILES, 'projects', `${cleanId}${isMarkdown ? '.md' : '.png'}`);

    try {
        const file = await readFile(filePath);
        const content = isMarkdown ? await marked(file.toString('utf-8')) : file;


        return new Response(content, {
            headers: {
                'Content-Type': isMarkdown ? 'text/html' : 'image/png',
                'Cache-Control': isMarkdown ? 'public, max-age=3600' : 'public, max-age=31536000'
            }
        });
    } catch {
        if (isMarkdown) {
            return new Response('', {
                headers: { 'Content-Type': 'text/html' }
            });
        }
        // Redirect to picsum placeholder for missing images
        return new Response(null, {
            status: 302,
            headers: { Location: `https://picsum.photos/seed/${id}/400/225` }
        });
    }
}