import type { FC } from 'react';

interface RoundProps {
    className : string;

}

const Round: FC<RoundProps> = ({ className }) => {
        return (
            <div className={className}>

            </div>
        );
}
export default Round;