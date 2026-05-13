import { useState } from "react";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ReviewForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      toast({
        title: "Please select a rating",
        description: "Tap the stars to rate our service.",
        variant: "destructive",
      });
      return;
    }
    setSubmitting(true);

    const text = [
      "New review from the Doozers Title Workz website:",
      `Name: ${name}`,
      `Rating: ${rating} / 5 stars`,
      `Review: ${review || "Not provided"}`,
    ].join("\n");

    const html = `
      <h2>New review from the Doozers Title Workz website</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Rating:</strong> ${"⭐".repeat(rating)} (${rating} / 5)</p>
      <p><strong>Review:</strong><br />${review || "Not provided"}</p>
    `;

    try {
      const response = await fetch("https://batlaunch.com/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "info@doozerstitles.com",
          subject: `New ${rating}-star review from ${name}`,
          text,
          html,
        }),
      });
      if (!response.ok) throw new Error("Failed");

      toast({ title: "Thank you!", description: "Your review has been submitted." });
      setName("");
      setReview("");
      setRating(0);
    } catch {
      toast({
        title: "Submission Failed",
        description: "There was a problem sending your review. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Card className="border border-border max-w-2xl mx-auto">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Leave Us a Review</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Share your experience with Doozers Title Workz.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Name *</label>
            <Input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              maxLength={100}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Rating *</label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setRating(s)}
                  onMouseEnter={() => setHover(s)}
                  onMouseLeave={() => setHover(0)}
                  className="p-1 transition-transform hover:scale-110"
                  aria-label={`${s} star${s > 1 ? "s" : ""}`}
                >
                  <Star
                    className={`w-8 h-8 ${
                      (hover || rating) >= s
                        ? "fill-secondary text-secondary"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-1 block">Your Review *</label>
            <Textarea
              required
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Tell us about your experience..."
              rows={4}
              maxLength={1000}
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="w-full bg-secondary text-primary hover:bg-secondary/90 hover:scale-105"
          >
            <Send className="w-4 h-4 mr-2" />
            {submitting ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ReviewForm;
