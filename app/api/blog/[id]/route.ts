import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '../../../connect/db'; // Adjust if needed
import Blog from '../../model/Blog';      // Adjust if needed

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const blog = await Blog.findById(params.id);

    if (!blog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog by ID:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
