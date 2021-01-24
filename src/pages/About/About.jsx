import React, { useEffect } from "react";
import Heading from "../../components/atoms/Heading/Heading";
import Text from "../../components/atoms/Text/Text";

const About = () => {
  useEffect(() => {
    document.title = "À propos - CoPA Musique";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Heading>À propos</Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        laudantium autem amet, architecto blanditiis ex placeat dolorem itaque
        culpa, illo ducimus, soluta ab? Quibusdam quo optio accusamus nemo
        facilis laboriosam!
      </Text>
      <Heading type={2}>Lorem Ipsum...</Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        laudantium autem amet, architecto blanditiis ex placeat dolorem itaque
        culpa, illo ducimus, soluta ab? Quibusdam quo optio accusamus nemo
        facilis laboriosam!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
      </Text>
      <Heading type={2}>Lorem Ipsum...</Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        laudantium autem amet, architecto blanditiis ex placeat dolorem itaque
        culpa, illo ducimus, soluta ab? Quibusdam quo optio accusamus nemo
        facilis laboriosam!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
      </Text>
      <Heading type={2}>Lorem Ipsum...</Heading>
      <Text>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
        laudantium autem amet, architecto blanditiis ex placeat dolorem itaque
        culpa, illo ducimus, soluta ab? Quibusdam quo optio accusamus nemo
        facilis laboriosam!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
        laboriosam laudantium corrupti distinctio odio quia officia maiores
        harum, voluptate iste ratione optio minus ut accusamus, quae commodi
        illo iure necessitatibus!
      </Text>
    </main>
  );
};

export default About;
