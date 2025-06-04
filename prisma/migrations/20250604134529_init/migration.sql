-- CreateTable
CREATE TABLE "Personal" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "e_date" TIMESTAMP(3) NOT NULL,
    "h_date" TEXT NOT NULL,
    "street_and_number" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "home_number" INTEGER NOT NULL,
    "kupha_name" TEXT NOT NULL,
    "kupha_number" INTEGER NOT NULL,
    "school" TEXT NOT NULL,
    "grade_finishing" INTEGER NOT NULL,
    "grade_entering" INTEGER NOT NULL,
    "father_name" TEXT NOT NULL,
    "father_phone_number" INTEGER NOT NULL,
    "mother_name" TEXT NOT NULL,
    "mother_phone_number" INTEGER NOT NULL,
    "emergency_name" TEXT NOT NULL,
    "emergency_phone_number" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "favorite_activities" TEXT NOT NULL,
    "dislike_activities" TEXT NOT NULL,
    "allergies" TEXT NOT NULL,
    "freinds" TEXT NOT NULL,
    "enhance" TEXT NOT NULL,
    "signature_personal" TEXT NOT NULL,
    "signature_date_personal" TIMESTAMP(3) NOT NULL,
    "swimmingId" INTEGER,

    CONSTRAINT "Personal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Swimming" (
    "id" SERIAL NOT NULL,
    "first_name_swimming" TEXT NOT NULL,
    "last_name_swimming" TEXT NOT NULL,
    "is_swimmer" BOOLEAN NOT NULL,
    "signature_swimming" TEXT NOT NULL,
    "signature_date_swimming" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Swimming_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AddOn" (
    "id" SERIAL NOT NULL,
    "name_add_ons" TEXT NOT NULL,
    "size_add_ons" TEXT NOT NULL,
    "amount_add_ons" INTEGER NOT NULL,
    "cost_add_ons" TEXT NOT NULL,
    "personalId" INTEGER NOT NULL,

    CONSTRAINT "AddOn_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personal_swimmingId_key" ON "Personal"("swimmingId");

-- AddForeignKey
ALTER TABLE "Personal" ADD CONSTRAINT "Personal_swimmingId_fkey" FOREIGN KEY ("swimmingId") REFERENCES "Swimming"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddOn" ADD CONSTRAINT "AddOn_personalId_fkey" FOREIGN KEY ("personalId") REFERENCES "Personal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
