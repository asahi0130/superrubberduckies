import { GetServerSideProps } from 'next';
import fs from 'fs';
import path from 'path';



const UniversityPage = ({ university }) => {


  return (
    <>
    <section id="top">
    <h2 className='text-xl text-center my-8' >{university.school}</h2>

<h1 className='text-xl text-center my-8' >{university.fullname}</h1>
    </section>
    </>
  );
};

export default UniversityPage;


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    // Get the slug from the URL
    const slug = params?.id;
  
    // Read the university.json file from the public folder
    const filePath = path.join(process.cwd(), 'public', 'university.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const universities = JSON.parse(jsonData);
  
    // Find the university by slug
    const university = universities.find((u: any) => u.slug === slug);
  
    // If the university is not found, return notFound: true
    if (!university) {
      return {
        notFound: true,
      };
    }
  
    // Return the university data as props
    return {
      props: { university },
    };
  };