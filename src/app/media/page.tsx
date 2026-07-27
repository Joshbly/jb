import { permanentRedirect } from "next/navigation";

export default function MediaRedirectPage() {
  permanentRedirect("/archive");
}
