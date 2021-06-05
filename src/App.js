import { Label } from "./components/label";
import { Layout } from "./components/layout";

import { CssModulesBlock } from './components/css-modules-block';
import { GooberBlock } from './components/goober-block';
import { TailwindBlock } from "./components/tailwind-block";
import { GooberThemeBlock } from './components/goober-theme-block';
import { TailwindThemeBlock } from "./components/tailwind-theme-block";
import { TailwindSeparateBlock } from "./components/tailwind-separate-block";
import { WysiwygBlock } from "./components/wysiwyg-block";
import { ComplicatedBlock } from "./components/complicated-block";

function App() {
  return (
    <Layout>

      <Label>BemBlock</Label>

      <div className="BemBlock">
        <div className="BemBlock__Inner">
          <div className="BemBlock__TextWrapper">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div className="BemBlock__ImgWrapper">
            <img className="BemBlock__Img" src="https://placekitten.com/400/300" alt="" />
          </div>
        </div>
      </div>

      <Label>BemTailwindBlock</Label>

      <div className="BemTailwindBlock">
        <div className="BemTailwindBlock__Inner">
          <div className="BemTailwindBlock__TextWrapper">
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
            <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
          </div>
          <div className="BemTailwindBlock__ImgWrapper">
            <img className="BemTailwindBlock__Img" src="https://placekitten.com/400/300" alt="" />
          </div>
        </div>
      </div>

      <Label>CssModulesBlock</Label>

      <CssModulesBlock src="https://placekitten.com/400/300">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </CssModulesBlock>

      <Label>GooberBlock</Label>

      <GooberBlock src="https://placekitten.com/400/300">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </GooberBlock>

      <Label>TailwindBlock</Label>

      <TailwindBlock src="https://placekitten.com/400/300">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </TailwindBlock>

      <Label>GooberThemeBlock</Label>

      <GooberThemeBlock src="https://placekitten.com/400/300">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </GooberThemeBlock>

      <Label>TailwindThemeBlock</Label>

      <TailwindThemeBlock src="https://placekitten.com/400/300">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </TailwindThemeBlock>

      <Label>TailwindSeparateBlock</Label>

      <TailwindSeparateBlock src="https://placekitten.com/400/300">
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
        <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
      </TailwindSeparateBlock>

      <Label>WysiwygBlock</Label>

      <WysiwygBlock src="https://placekitten.com/400/300">
        <h2>The quick brown fox</h2>
        <p>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.
        </p>
        <h3>The quick brown fox</h3>
        <p>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.
        </p>
        <ol>
          <li>The quick brown fox jumps over the lazy dog. </li>
          <li>The quick brown fox jumps over the lazy dog. </li>
          <li>The quick brown fox jumps over the lazy dog. </li>
        </ol>
        <p>
          The quick brown fox jumps over the lazy dog. The quick brown fox jumps
          over the lazy dog. The quick brown fox jumps over the lazy dog. The
          quick brown fox jumps over the lazy dog.
        </p>
        <ul>
          <li>The quick brown fox jumps over the lazy dog. </li>
          <li>The quick brown fox jumps over the lazy dog. </li>
          <li>The quick brown fox jumps over the lazy dog. </li>
        </ul>
      </WysiwygBlock>

      <Label>ComplicatedBlock</Label>

      <ComplicatedBlock />

      <Label>demos end</Label>

    </Layout>
  );
}

export default App;
