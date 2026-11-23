import { initBotId } from "botid/client/core";

// Must match the fetch in the contact and RFP forms exactly.
initBotId({
  protect: [{ path: "/api/contact-form", method: "POST" }],
});
