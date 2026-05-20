import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '../PostComments';

describe('Validação do componente PostComment', () => {
    
    it('Renderiza o botão de envio na tela', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Adiciona comentários diferentes e valida a lista', () => {
        render(<PostComments />);

        const inputComentario = screen.getByTestId('textarea');
        const botaoEnviar = screen.getByTestId('btn-submittest');

        fireEvent.change(inputComentario, {
            target: {
                value: 'Primeiro comentário de teste'
            }
        });
        fireEvent.click(botaoEnviar);

        expect(screen.getByText('Primeiro comentário de teste')).toBeInTheDocument();

        fireEvent.change(inputComentario, {
            target: {
                value: 'Segundo comentário inserido'
            }
        });
        fireEvent.click(botaoEnviar);

        expect(screen.getByText('Segundo comentário inserido')).toBeInTheDocument();

        const listaComentarios = screen.getAllByTestId('comment');
        expect(listaComentarios.length).toBe(2);
    });

    test('Campo deve ser limpo após envio do comentário', () => {
        render(<PostComments />);

        const inputComentario = screen.getByTestId('textarea') as HTMLTextAreaElement;
        const botaoEnviar = screen.getByTestId('btn-submittest');

        fireEvent.change(inputComentario, {
            target: {
                value: 'Teste de limpeza'
            }
        });

        fireEvent.click(botaoEnviar);

        expect(inputComentario.value).toBe('');
    });

});