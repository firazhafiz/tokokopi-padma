import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { branches } from "@/data/branchesData";
import { useToast } from "@/hooks/use-toast";
import { format, addDays, isBefore, startOfToday, isToday } from "date-fns";
import { id } from "date-fns/locale";
import {
  CalendarDays,
  Clock,
  Users,
  MapPin,
  CheckCircle2,
  AlertCircle,
  PartyPopper,
  Coffee,
} from "lucide-react";
import { cn } from "@/lib/utils";

type ReservationType = "same-day" | "event";

interface ReservationForm {
  type: ReservationType;
  name: string;
  email: string;
  phone: string;
  branch: string;
  date: Date | undefined;
  time: string;
  guests: string;
  // Event specific
  eventType: string;
  duration: string;
  specialRequests: string;
  cateringNeeded: boolean;
  decorationNeeded: boolean;
  projectorNeeded: boolean;
  soundSystemNeeded: boolean;
}

const timeSlots = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
];

const eventTypes = [
  { value: "meeting", label: "Meeting / Rapat" },
  { value: "birthday", label: "Ulang Tahun" },
  { value: "gathering", label: "Gathering / Reuni" },
  { value: "wedding", label: "Bridal Shower / Anniversary" },
  { value: "seminar", label: "Seminar / Workshop" },
  { value: "other", label: "Lainnya" },
];

const durations = [
  { value: "2", label: "2 Jam" },
  { value: "3", label: "3 Jam" },
  { value: "4", label: "4 Jam" },
  { value: "5", label: "5 Jam" },
  { value: "full", label: "Full Day" },
];

const guestOptions = [
  { value: "1-2", label: "1-2 orang" },
  { value: "3-5", label: "3-5 orang" },
  { value: "6-10", label: "6-10 orang" },
  { value: "11-20", label: "11-20 orang" },
  { value: "21-30", label: "21-30 orang" },
  { value: "30+", label: "Lebih dari 30 orang" },
];

const ReservationPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [reservationId, setReservationId] = useState("");

  const [form, setForm] = useState<ReservationForm>({
    type: "same-day",
    name: "",
    email: "",
    phone: "",
    branch: "",
    date: undefined,
    time: "",
    guests: "",
    eventType: "",
    duration: "",
    specialRequests: "",
    cateringNeeded: false,
    decorationNeeded: false,
    projectorNeeded: false,
    soundSystemNeeded: false,
  });

  const today = startOfToday();
  const minDateSameDay = today;
  const minDateEvent = addDays(today, 3); // Events need at least 3 days advance
  const maxDate = addDays(today, 60);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!form.name || !form.email || !form.phone || !form.branch || !form.date || !form.time || !form.guests) {
      toast({
        title: "Data Tidak Lengkap",
        description: "Mohon lengkapi semua field yang diperlukan.",
        variant: "destructive",
      });
      return;
    }

    if (form.type === "event" && (!form.eventType || !form.duration)) {
      toast({
        title: "Data Event Tidak Lengkap",
        description: "Mohon pilih tipe event dan durasi.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate reservation ID
    const id = `PDM${Date.now().toString().slice(-8)}`;
    setReservationId(id);
    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setForm({
      type: "same-day",
      name: "",
      email: "",
      phone: "",
      branch: "",
      date: undefined,
      time: "",
      guests: "",
      eventType: "",
      duration: "",
      specialRequests: "",
      cateringNeeded: false,
      decorationNeeded: false,
      projectorNeeded: false,
      soundSystemNeeded: false,
    });
    setIsSuccess(false);
    setReservationId("");
  };

  // Calculate estimated price for events
  const calculateEventPrice = () => {
    let basePrice = 0;
    const guestNum = parseInt(form.guests.split("-")[0]) || 0;

    if (guestNum <= 10) basePrice = 500000;
    else if (guestNum <= 20) basePrice = 1000000;
    else if (guestNum <= 30) basePrice = 1500000;
    else basePrice = 2000000;

    if (form.duration === "full") basePrice *= 1.5;
    if (form.cateringNeeded) basePrice += 300000;
    if (form.decorationNeeded) basePrice += 200000;
    if (form.projectorNeeded) basePrice += 150000;
    if (form.soundSystemNeeded) basePrice += 200000;

    return basePrice;
  };

  if (isSuccess) {
    return (
      <Layout>
        <div className="pt-24 pb-16 min-h-screen flex items-center">
          <div className="container-padma">
            <div className="max-w-xl mx-auto">
              <div className="card-seamless p-8 text-center animate-scale-in">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                </div>
                <h1 className="font-serif text-3xl font-bold text-foreground mb-3">
                  Reservasi Berhasil!
                </h1>
                <p className="text-muted-foreground mb-6">
                  Terima kasih telah melakukan reservasi di Toko Kopi Padma.
                  Kami akan menghubungi Anda untuk konfirmasi.
                </p>

                <div className="bg-secondary/50 rounded-xl p-6 mb-6">
                  <p className="text-sm text-muted-foreground mb-2">
                    Nomor Reservasi Anda
                  </p>
                  <p className="font-mono text-2xl font-bold text-primary">
                    {reservationId}
                  </p>
                </div>

                <div className="text-left space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      {form.date && format(form.date, "EEEE, dd MMMM yyyy", { locale: id })}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{form.time} WIB</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span className="text-foreground">
                      {branches.find((b) => b.id === form.branch)?.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{form.guests}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button onClick={resetForm}>Buat Reservasi Baru</Button>
                  <Button variant="outline" asChild>
                    <a href="/">Kembali ke Beranda</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16">
        {/* Header */}
        <div className="bg-secondary/30 py-16">
          <div className="container-padma">
            <div className="text-center max-w-2xl mx-auto animate-fade-in-up">
              <span className="text-primary font-medium tracking-wide uppercase text-sm">
                Reservasi
              </span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Pesan Tempat <span className="text-primary">Anda</span>
              </h1>
              <p className="text-muted-foreground">
                Pilih tipe reservasi sesuai kebutuhan Anda. Same Day untuk
                kunjungan hari ini, atau Event untuk acara khusus.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="container-padma py-12">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Reservation Type */}
              <div className="card-seamless p-6 animate-fade-in-up">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Tipe Reservasi
                </h2>
                <RadioGroup
                  value={form.type}
                  onValueChange={(value) =>
                    setForm({
                      ...form,
                      type: value as ReservationType,
                      date: undefined,
                    })
                  }
                  className="grid sm:grid-cols-2 gap-4"
                >
                  <Label
                    htmlFor="same-day"
                    className={cn(
                      "flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                      form.type === "same-day"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <RadioGroupItem value="same-day" id="same-day" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Coffee className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Same Day</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Untuk kunjungan hari ini atau beberapa hari ke depan.
                        Ideal untuk 1-10 orang.
                      </p>
                    </div>
                  </Label>

                  <Label
                    htmlFor="event"
                    className={cn(
                      "flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                      form.type === "event"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    )}
                  >
                    <RadioGroupItem value="event" id="event" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <PartyPopper className="h-5 w-5 text-primary" />
                        <span className="font-semibold">Event</span>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Untuk acara khusus seperti meeting, ulang tahun, atau
                        gathering. Min. booking 3 hari sebelumnya.
                      </p>
                    </div>
                  </Label>
                </RadioGroup>
              </div>

              {/* Personal Info */}
              <div className="card-seamless p-6 animate-fade-in-up animation-delay-100">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Informasi Pribadi
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap *</Label>
                    <Input
                      id="name"
                      placeholder="Masukkan nama Anda"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="phone">Nomor Telepon *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      required
                      className="bg-background"
                    />
                  </div>
                </div>
              </div>

              {/* Reservation Details */}
              <div className="card-seamless p-6 animate-fade-in-up animation-delay-200">
                <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                  Detail Reservasi
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Branch */}
                  <div className="space-y-2">
                    <Label>Pilih Cabang *</Label>
                    <Select
                      value={form.branch}
                      onValueChange={(value) =>
                        setForm({ ...form, branch: value })
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Pilih cabang" />
                      </SelectTrigger>
                      <SelectContent>
                        {branches.map((branch) => (
                          <SelectItem key={branch.id} value={branch.id}>
                            {branch.name} - {branch.city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Guests */}
                  <div className="space-y-2">
                    <Label>Jumlah Tamu *</Label>
                    <Select
                      value={form.guests}
                      onValueChange={(value) =>
                        setForm({ ...form, guests: value })
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Pilih jumlah" />
                      </SelectTrigger>
                      <SelectContent>
                        {guestOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date */}
                  <div className="space-y-2">
                    <Label>Tanggal *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-background",
                            !form.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarDays className="mr-2 h-4 w-4" />
                          {form.date
                            ? format(form.date, "dd MMMM yyyy", { locale: id })
                            : "Pilih tanggal"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={form.date}
                          onSelect={(date) => setForm({ ...form, date })}
                          disabled={(date) =>
                            isBefore(
                              date,
                              form.type === "same-day" ? minDateSameDay : minDateEvent
                            ) || isBefore(maxDate, date)
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    {form.type === "event" && (
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        Event harus dipesan minimal 3 hari sebelumnya
                      </p>
                    )}
                  </div>

                  {/* Time */}
                  <div className="space-y-2">
                    <Label>Waktu *</Label>
                    <Select
                      value={form.time}
                      onValueChange={(value) =>
                        setForm({ ...form, time: value })
                      }
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Pilih waktu" />
                      </SelectTrigger>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem
                            key={slot}
                            value={slot}
                            disabled={
                              form.date &&
                              isToday(form.date) &&
                              parseInt(slot) <=
                                new Date().getHours()
                            }
                          >
                            {slot} WIB
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Event Specific */}
              {form.type === "event" && (
                <div className="card-seamless p-6 animate-fade-in-up">
                  <h2 className="font-serif text-xl font-bold text-foreground mb-4">
                    Detail Event
                  </h2>
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Event Type */}
                      <div className="space-y-2">
                        <Label>Tipe Event *</Label>
                        <Select
                          value={form.eventType}
                          onValueChange={(value) =>
                            setForm({ ...form, eventType: value })
                          }
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Pilih tipe event" />
                          </SelectTrigger>
                          <SelectContent>
                            {eventTypes.map((type) => (
                              <SelectItem key={type.value} value={type.value}>
                                {type.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Duration */}
                      <div className="space-y-2">
                        <Label>Durasi *</Label>
                        <Select
                          value={form.duration}
                          onValueChange={(value) =>
                            setForm({ ...form, duration: value })
                          }
                        >
                          <SelectTrigger className="bg-background">
                            <SelectValue placeholder="Pilih durasi" />
                          </SelectTrigger>
                          <SelectContent>
                            {durations.map((dur) => (
                              <SelectItem key={dur.value} value={dur.value}>
                                {dur.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div className="space-y-3">
                      <Label>Layanan Tambahan (opsional)</Label>
                      <div className="grid sm:grid-cols-2 gap-3">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="catering"
                            checked={form.cateringNeeded}
                            onCheckedChange={(checked) =>
                              setForm({
                                ...form,
                                cateringNeeded: checked as boolean,
                              })
                            }
                          />
                          <Label
                            htmlFor="catering"
                            className="text-sm font-normal cursor-pointer"
                          >
                            Catering (+Rp 300.000)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="decoration"
                            checked={form.decorationNeeded}
                            onCheckedChange={(checked) =>
                              setForm({
                                ...form,
                                decorationNeeded: checked as boolean,
                              })
                            }
                          />
                          <Label
                            htmlFor="decoration"
                            className="text-sm font-normal cursor-pointer"
                          >
                            Dekorasi (+Rp 200.000)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="projector"
                            checked={form.projectorNeeded}
                            onCheckedChange={(checked) =>
                              setForm({
                                ...form,
                                projectorNeeded: checked as boolean,
                              })
                            }
                          />
                          <Label
                            htmlFor="projector"
                            className="text-sm font-normal cursor-pointer"
                          >
                            Proyektor (+Rp 150.000)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id="sound"
                            checked={form.soundSystemNeeded}
                            onCheckedChange={(checked) =>
                              setForm({
                                ...form,
                                soundSystemNeeded: checked as boolean,
                              })
                            }
                          />
                          <Label
                            htmlFor="sound"
                            className="text-sm font-normal cursor-pointer"
                          >
                            Sound System (+Rp 200.000)
                          </Label>
                        </div>
                      </div>
                    </div>

                    {/* Special Requests */}
                    <div className="space-y-2">
                      <Label htmlFor="requests">Permintaan Khusus</Label>
                      <Textarea
                        id="requests"
                        placeholder="Tuliskan permintaan khusus Anda di sini (tema, menu khusus, dll)..."
                        value={form.specialRequests}
                        onChange={(e) =>
                          setForm({ ...form, specialRequests: e.target.value })
                        }
                        rows={4}
                        className="bg-background resize-none"
                      />
                    </div>

                    {/* Estimated Price */}
                    {form.guests && (
                      <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                        <p className="text-sm text-muted-foreground mb-1">
                          Estimasi Biaya Minimum
                        </p>
                        <p className="font-serif text-2xl font-bold text-primary">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 0,
                          }).format(calculateEventPrice())}
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          * Harga final akan dikonfirmasi oleh tim kami
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Memproses Reservasi..."
                  : "Konfirmasi Reservasi"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Dengan melakukan reservasi, Anda menyetujui{" "}
                <a href="#" className="text-primary hover:underline">
                  Syarat & Ketentuan
                </a>{" "}
                kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReservationPage;
