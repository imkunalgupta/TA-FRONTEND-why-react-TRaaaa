//import './stylesheets/style.css';
import Button from './Button';

function App() {
  return (
    <>
      <Button label="Click Me!" type="primary" size="large" />
      <Button label="Click Me!" type="secondary" size="medium" />
      <Button label="Click Me!" type="tertiary" size="small" />
      <Button label="Click Me!" />
      <Button disabled />
      <Button
        size="large"
        label="Button"
        type="secondary"
        onClickHandler={() => alert('You clicked me!')}
      />
    </>
  );
}
export default App;
