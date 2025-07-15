-- Enable Row Level Security on all tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.qr_scans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Users can insert their own profile" ON public.profiles;
DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Everyone can view active events" ON public.events;
DROP POLICY IF EXISTS "Admins can manage all events" ON public.events;
DROP POLICY IF EXISTS "Users can view their own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Users can create their own bookings" ON public.bookings;
DROP POLICY IF EXISTS "Admins can view all bookings" ON public.bookings;
DROP POLICY IF EXISTS "Staff can view QR scans" ON public.qr_scans;
DROP POLICY IF EXISTS "Staff can create QR scans" ON public.qr_scans;
DROP POLICY IF EXISTS "Users can view their own activity" ON public.activity_logs;
DROP POLICY IF EXISTS "Admins can view all activity" ON public.activity_logs;
DROP POLICY IF EXISTS "All authenticated users can create activity logs" ON public.activity_logs;

-- Profiles policies (avoid infinite recursion by using auth.uid() directly)
CREATE POLICY "Users can view their own profile" ON public.profiles 
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles 
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles 
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Admin access using email from JWT token to avoid recursion
CREATE POLICY "Admins can view all profiles" ON public.profiles 
  FOR SELECT USING (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com')
  );

CREATE POLICY "Admins can manage all profiles" ON public.profiles 
  FOR ALL USING (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com')
  );

-- Events policies
CREATE POLICY "Everyone can view active events" ON public.events 
  FOR SELECT USING (status = 'active');

CREATE POLICY "Admins can manage all events" ON public.events 
  FOR ALL USING (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com')
  );

-- Bookings policies
CREATE POLICY "Users can view their own bookings" ON public.bookings 
  FOR SELECT USING (customer_id = auth.uid());

CREATE POLICY "Users can create their own bookings" ON public.bookings 
  FOR INSERT WITH CHECK (customer_id = auth.uid());

CREATE POLICY "Admins can view all bookings" ON public.bookings 
  FOR SELECT USING (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com')
  );

CREATE POLICY "Admins can manage all bookings" ON public.bookings 
  FOR ALL USING (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com')
  );

-- QR scans policies
CREATE POLICY "Staff can view QR scans" ON public.qr_scans 
  FOR SELECT USING (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com', 'nirupamtaggart@gmail.com', 'nirupampam2020@gmail.com')
  );

CREATE POLICY "Staff can create QR scans" ON public.qr_scans 
  FOR INSERT WITH CHECK (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com', 'nirupamtaggart@gmail.com', 'nirupampam2020@gmail.com')
  );

-- Activity logs policies
CREATE POLICY "Users can view their own activity" ON public.activity_logs 
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Admins can view all activity" ON public.activity_logs 
  FOR SELECT USING (
    auth.jwt() ->> 'email' IN ('niruwu2006@gmail.com')
  );

CREATE POLICY "Sub-admins and volunteers can view relevant activity" ON public.activity_logs 
  FOR SELECT USING (
    auth.jwt() ->> 'email' IN ('nirupamtaggart@gmail.com', 'nirupampam2020@gmail.com')
  );

CREATE POLICY "All authenticated users can create activity logs" ON public.activity_logs 
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL);
