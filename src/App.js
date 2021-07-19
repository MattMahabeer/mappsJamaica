import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';


function App() {
  return (
    <div className="App">
      <h1>MAPPS</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
