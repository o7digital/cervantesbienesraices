CREATE TABLE "MarketingContactLead" (
  "id" TEXT NOT NULL,
  "language" TEXT NOT NULL DEFAULT 'es',
  "pagePath" TEXT,
  "source" TEXT,
  "name" TEXT NOT NULL,
  "email" TEXT NOT NULL,
  "phone" TEXT,
  "objective" TEXT,
  "message" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

  CONSTRAINT "MarketingContactLead_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "MarketingContactLead_language_idx" ON "MarketingContactLead"("language");
CREATE INDEX "MarketingContactLead_createdAt_idx" ON "MarketingContactLead"("createdAt");
