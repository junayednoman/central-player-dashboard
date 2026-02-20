import { Eye, Clock } from "lucide-react";
import Image from "next/image";

interface UserPostCardProps {
  avatar?: string;
  name?: string;
  email?: string;
  description?: string;
  views?: string;
  timeAgo?: string;
}

export function PostCard({
  avatar = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-sfWREFiHltexk5ryh8ssnREupT8b7c.png",
  name = "Micheal Ekpot",
  email = "mc@gmail.com",
  description = "We are seeking a Senior UI/UX Designer to lead the design of intuitive and user-centric mobile applications. The ideal ,candidate should have a strong background in design thinking and user research.",
  views = "105K",
  timeAgo = "30 mins",
}: UserPostCardProps) {
  return (
    <div className="w-full rounded-lg border border-border bg-card p-6 text-card-foreground">
      {/* User Header */}
      <div className="mb-4 flex items-start gap-4">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={name}
          width={56}
          height={56}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>

      {/* Description */}
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-foreground">
        {description}
      </p>

      {/* Footer with Views and Time */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Eye className="h-4 w-4" />
          <span>{views} Views</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{timeAgo}</span>
        </div>
      </div>
    </div>
  );
}
