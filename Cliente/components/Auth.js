import * as React from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

export default function GoogleSignInButton() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '1096205509177-gv3k496048o9t3r48s3qpujts07rdllf.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      // Aquí puedes enviar el token a tu servidor para autenticar al usuario
      console.log(id_token);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Iniciar sesión con Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
