import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Info } from "lucide-react";

export default function AccountDocs() {
  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-2">Cuenta</h2>
      <p className="text-lg mb-2">
        SavePass permite crear una cuenta con un proveedor como Google o Github,
        de lo contrario, podrás hacerlo estableciendo tu dirección de correo
        electrónico y contraseña manualmente.
      </p>
      <p className="text-lg mb-2">
        Recomendamos que la opción seleccionada para crear usuario tenga
        habilitada la autenticación multifactor (MFA) para mayor seguridad.
      </p>
      <p className="text-lg mb-2">
        Al crear una cuenta, el usuario puede actualizar la imágen de perfil,
        cambiar su nombre, actualizar su contraseña maestra y eliminar su
        cuenta.
      </p>

      <div className="pl-8">
        <h3 className="text-xl font-bold mt-10 mb-2">Contraseña maestra</h3>
        <p className="text-lg mb-6">
          La contraseña maestra es el punto de acceso a la aplicación, se define
          después de crear la cuenta por primera vez. Es importante recordarla y
          mantenerla segura pues es nuestro llavero de nuestras credenciales. La
          contraseña maestra en claro no es enviada nunca a los servidores y no
          es almacenada, el proceso de generación y cifrado es el siguiente:
        </p>
        <div className="flex justify-center">
          <Image
            src="/docs/master_password_flow.png"
            alt="Master Password Flow"
            width={800}
            height={200}
            className="object-cover"
          />
        </div>

        <ul className="list-disc text-md space-y-2 mt-8">
          <li>
            <strong>Random Salt:</strong> Valor aleatorio y único, generado en
            el instante mediante un generador criptográfico, representado en
            Base64 para mayor portabilidad.
          </li>
          <li>
            <strong>Derived Key:</strong> Clave única y segura derivada en el
            momento utilizando el algoritmo PBKDF2 con HMAC-SHA256 y 100,000
            iteraciones, aplicada sobre la Master Password y el Salt para un
            mayor refuerzo contra ataques de fuerza bruta.
          </li>
          <li>
            <strong>Clear Master Password:</strong> Es la contraseña maestra del
            usuario en claro.
          </li>
          <li>
            <strong>Hashed Master Password:</strong> Valor hash generado en el
            instante mediante SHA-256 sobre la Derived Key, representado en
            Base64, seguro y no reversible.
          </li>
        </ul>
      </div>

      <Alert className="bg-primary/5 border-primary/20 my-6">
        <Info className="h-4 w-4" />
        <AlertTitle className="font-semibold">
          Zero-Knowledge Architecture
        </AlertTitle>
        <AlertDescription>
          SavePass employs a zero-knowledge architecture, which means we have no
          way to access your encrypted data. Your clear master password is never
          sent to our servers, and we don't store it anywhere.
        </AlertDescription>
      </Alert>
    </div>
  );
}
