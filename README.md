# storyblok-codecoffee-hackathon
> Created by Niko, Syndi and Winona

## MVP Summary
Our project is a StoryBlok field plugin that helps users make their image content accessible. When a user inputs an image into our plugin, it will auto-generate `alt` text that will help display a written description of the image so everyone can meaningfully view the content. It will then generate an image block with said `alt` text added to it.

## MVP Features
- An image and credit fields to help generate the `alt` text and create the image element
- A preview of the alt text before confirming final image block creation
- A modal popup to make the block creation process easier to navigate
- A backend (hosted by third-party) that calls our chosen AI API to generate alt text from our image, and then formats it based on WCAG guidelines
- *Nice to have*: Explanation of why the alt text follows WCAG guidelines, and maybe a WCAG score
- *Nice to have*: Offer three different alt text options that the user can choose from
- *Nice to have*: Feature that helps find the credits for an image