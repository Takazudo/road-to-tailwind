import { Layout } from "./components/layout";
//import { ImgTextBlock } from './components-css-modules/img-text-block';
//import { ImgTextBlock } from './components-goober/img-text-block';
//import { ImgTextBlock } from "./components-tailwind/img-text-block";
//import { ImgTextBlock } from './components-goober-theme/img-text-block';
//import { ImgTextBlock } from "./components-tailwind-theme/img-text-block";
//import { ImgTextBlock } from "./components-tailwind-separate/img-text-block";
import { ImgTextBlock } from "./components-wysiwyg/img-text-block";

function App() {
  return (
    <Layout>
      <ImgTextBlock src="https://placekitten.com/400/300">
        <p>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.{" "}
        </p>
        <p>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.{" "}
        </p>
        <p>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.{" "}
        </p>
      </ImgTextBlock>
    </Layout>
  );
}

export default App;
