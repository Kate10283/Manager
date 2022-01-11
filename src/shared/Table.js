import { useContext, useEffect } from 'react';
import { ThemeContext } from '../store/theme-context';
import './Table.css';
import { table } from '../helpers/table'

export const Table = (props) => {
    const context = useContext(ThemeContext);

    useEffect(() => {
        table();
    }, []);

    return (
        <table>
            <thead>
                <tr style={{
                    background: context.diagram, color: context.color
                }}>
                    <td className='empty-cell'></td>
                    <td>Доход(грн)</td>
                    <td>Дата</td>
                    <td>Комментарий</td>
                </tr>
            </thead>
            <tbody>
                <tr className='table-group' style={{
                    background: context.logo, color: context.color
                }}>
                    <td colSpan={4}>Group</td>
                </tr>
                <tr className='table-subgroup'>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>
                        <p>1000</p>
                        <input className='_hide' type='number' defaultValue='1000' />
                    </td>
                    <td className='date'>
                        <p>01.01.2022</p>
                        <input className='_hide' type='date' defaultValue='2022-01-01' />
                    </td>
                    <td className='comment'>
                        <p>Комментарий</p>
                        <input className='_hide' type='text' defaultValue='Комментарий' />
                    </td>
                </tr>
                <tr className='table-subgroup'>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>
                        <p>1000</p>
                        <input className='_hide' type='number' defaultValue='1000' />
                    </td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr className='table-subgroup'>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr className='table-subgroup'>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr className='table-group' style={{
                    background: context.logo, color: context.color
                }}>
                    <td colSpan={4}>Group</td>
                </tr>
                <tr className='table-subgroup'>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>2000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr className='table-subgroup'>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>3000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
                <tr>
                    <td className='categ-name' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.diagram}`, color: context.color
                    }}>Работа</td>
                    <td className='money'>1000</td>
                    <td className='date'>01.01.2022</td>
                    <td className='comment'>Комментарий</td>
                </tr>
            </tbody>
            <tfoot>
                <tr style={{
                    background: context.diagram, color: context.color
                }}>
                    <td className='empty-cell'></td>
                    <td className='empty-cell'></td>
                    <td>Общий доход:</td>
                    <td>2000грн</td>
                </tr>
            </tfoot>
        </table>
    );
}