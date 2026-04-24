export interface Tag {
    id: number;
    name: string;
}

export interface Experience {
    id: number;
    company: string;
    role: string;
    start_date: string;
    end_date: string | null;
    is_current: boolean;
    description: string;
    tech_stack: string[];
    detail_path: string;
    display_order: number;
    tags?: Tag[];
}

export interface Project {
    id: number;
    title: string;
    description: string;
    tech_stack: string[];
    github_url: string | null;
    live_url: string | null;
    image_url: string | null;
    detail_path: string | null;
    display_order: number;
    tags?: Tag[];
}

export interface Skill {
    id: number;
    name: string;
    category: string;
    display_order: number;
    tags?: Tag[];
}