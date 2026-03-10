import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Cho phép các file hệ thống, tĩnh (image, favicon, _next) hoạt động bình thường
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.includes('.') // Cho phép các file như .png, .ico, .svg
  ) {
    return NextResponse.next();
  }

  // 2. Nếu không phải trang chủ (/) thì redirect hết về trang chủ
  if (pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Cấu hình để middleware chỉ chạy ở các đường dẫn cần thiết
export const config = {
  matcher: [
    /*
     * Khớp tất cả các đường dẫn trừ:
     * - api (các route API)
     * - _next/static (file tĩnh)
     * - _next/image (tối ưu ảnh)
     * - favicon.ico (biểu tượng web)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};