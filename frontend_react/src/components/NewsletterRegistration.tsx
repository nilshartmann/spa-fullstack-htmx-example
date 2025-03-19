import { Input } from "./Input.tsx";
import { Button } from "./Button.tsx";
import React, { useState } from "react";
import { useSubscribeToNewsletterMutation } from "./use-queries.ts";
import LoadingIndicator from "./LoadingIndicator.tsx";

export function NewsletterRegistration() {
  const [email, setEmail] = useState("");

  // todo:
  //   - useSubscribeToNewsletterMutation
  //   - input disabled, während mutation läuft
  //   - save Disabled wenn Mutation läuft, oder Textfeld leer
  //   - LoadingIndicator während Request läuft
  //       <LoadingIndicator secondary placeholder={<img src={logo} />} />
  //   - nach erfolgreichem Speichenr "Subscribed!" zurücksetzen, wenn Taste gedrückt wird

  // REST Aufruf!
  const mutation = useSubscribeToNewsletterMutation();

  const handleEmailChange = (e: string) => {
    setEmail(e);
    mutation.reset();
  };

  const handleSubmit = async () => {
    await mutation.mutateAsync(email);
    setEmail("");
  };

  return (
    <div
      className={"max-w-1/4 flex items-center space-x-4 pe-2 ps-2 font-barlow"}
    >
      <div>Don't miss new recipes. Subscribe to newsletter</div>
      <div className={"max-w-64"}>
        <Input
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder={"E-Mail"}
        />
      </div>
      <div>
        <Button>
          {mutation.isPending ? (
            <LoadingIndicator secondary />
          ) : (
            <button onClick={handleSubmit}>Subscribe</button>
          )}
        </Button>
      </div>
      <div>{mutation.isSuccess && <span>Subscribed!</span>}</div>
    </div>
  );
}
