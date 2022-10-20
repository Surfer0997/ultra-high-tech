type Person = {
    birth_year: number | null;
    death_year: number | null;
    name: string;
}

export type Book = {
    id: number;
    title: string;
    subjects: string[];
    authors: Person[];
    translators: Person[];
    bookshelves: string[];
    languages: string[];
    copyright: boolean | null;
    media_type: string;
    formats: {[string:string]:string};
    download_count: number;
}