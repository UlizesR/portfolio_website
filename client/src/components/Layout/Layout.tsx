import React from 'react';

type Props = {
    header: React.ReactNode;
    children: React.ReactNode;
    footer: React.ReactNode;
}

const Layout: React.FC<Props> = ({header, children, footer}) => {
    return (
        <div className="h-20">
            <header className="">
                {header}
            </header>
            <main className="h-full">
                {children}
            </main>
            <footer className="h-80">
                {footer}
            </footer>
        </div>
    );
};

export default Layout;