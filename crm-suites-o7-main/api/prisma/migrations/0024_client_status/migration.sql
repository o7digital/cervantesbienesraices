-- Add explicit client status so CRM can distinguish prospects, customers and lost contacts.
CREATE TYPE "ClientStatus" AS ENUM ('CLIENT', 'PROSPECT', 'LOST');

ALTER TABLE "Client"
ADD COLUMN "status" "ClientStatus" NOT NULL DEFAULT 'CLIENT';
