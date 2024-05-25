import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans leading-relaxed text-gray-800">
          <Container>
            <Section className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden my-10 px-10 py-6">
              <Heading className="text-2xl font-bold mb-4 text-gray-900">
                New message from your portfolio site
              </Heading>
              <Text className="text-lg">
                You received the following message from your contact form:
              </Text>
              <div className="bg-gray-50 border border-gray-200 rounded p-4 my-4">
                <Text className="text-gray-700">{message}</Text>
              </div>
              <Hr className="my-6 border-gray-200" />
              <Text className="text-gray-600">
                Sender&apos;s email is:{" "}
                <a
                  href={`mailto:${senderEmail}`}
                  className="text-blue-500 hover:underline"
                >
                  {senderEmail}
                </a>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
