import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Teste para inserção de dois comentarios', () => {
        render(<PostComment/>);

        // adiciona o primeiro comentário
        fireEvent.change(screen.getByTestId('ComentarioTextArea'), {
            target: {
                value: 'Teste 1',
            }
        });
        fireEvent.click(screen.getByTestId('ComentarioBotao'));
    
        // adiciona o segundo comentário
        fireEvent.change(screen.getByTestId('ComentarioTextArea'), {
            target: {
                value: 'Teste 2',
            }
        });
        fireEvent.click(screen.getByTestId('ComentarioBotao'));

        expect(screen.getAllByTestId('ComentarioElemento')).toHaveLength(2);

    });
});