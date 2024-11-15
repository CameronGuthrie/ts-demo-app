import { BootcampProps, Bootcamp } from './models/bootcamp';

const form = document.querySelector('.create') as HTMLFormElement;

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    const newBootcamp: BootcampProps = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        courses: data.getAll('courses') as string[],
        length: parseInt(data.get('length') as string),
        id: Math.floor(Math.random() * 1000)
    }

    const res = await Bootcamp.save(newBootcamp);
    if (!res.ok) {
        console.error('Error saving bootcamp');
    }
    if (res.ok) {
        window.location.href = '/';
    }
});
