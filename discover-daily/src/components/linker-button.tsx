import Link from 'next/link';

function LinkerButton({ href, children }: { href: string; children: string;}) {
  return (
    <Link href={href} className='text-green-500'>
      {children}
    </Link>
  );
}

export default LinkerButton;