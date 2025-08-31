import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';

function App() {
  return (
    <>
      <Button text="Button.tsx" />
      <Input
        label="Input.tsx"
        placeholder="Placeholder"
        showError
        errorMessage="*You've fucked up"
      />
    </>
  );
}

export default App;
