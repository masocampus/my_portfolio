import { portfolio } from "@/data/portfolio"
import {
  metaClass,
  SectionShell,
} from "@/components/section-shell/SectionShell"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

/**
 * 화면 목업이다. form을 쓰지 않고 버튼은 type="button"이라 전송되지 않는다.
 */
export function ContactSection() {
  const { contact } = portfolio

  return (
    <SectionShell
      id="contact"
      label={contact.label}
      title={contact.title}
      tone="surface"
    >
      <div className="mt-8 flex max-w-md flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-name" className={metaClass}>
            {contact.nameLabel}
          </Label>
          <Input
            id="contact-name"
            name="name"
            className="h-11 bg-surface px-3 text-base text-ink md:text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-email" className={metaClass}>
            {contact.emailLabel}
          </Label>
          <Input
            id="contact-email"
            name="email"
            type="email"
            className="h-11 bg-surface px-3 text-base text-ink md:text-base"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="contact-message" className={metaClass}>
            {contact.messageLabel}
          </Label>
          <Textarea
            id="contact-message"
            name="message"
            className="min-h-32 bg-surface px-3 py-3 text-base text-ink md:text-base"
          />
        </div>
        <Button
          type="button"
          className="h-11 w-full px-4 text-base hover:bg-point-hover active:translate-y-0 sm:w-fit"
        >
          {contact.submitLabel}
        </Button>
        <p className="text-[13px] leading-[1.7] font-normal text-subtle">
          {contact.notice}
        </p>
      </div>
    </SectionShell>
  )
}
