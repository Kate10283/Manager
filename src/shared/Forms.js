import { useContext, useEffect } from 'react';
import { ThemeContext } from '../store/theme-context';
import './Forms.css';
import { forms } from '../helpers/forms';

export const Forms = () => {
    const context = useContext(ThemeContext);

    useEffect(() => {
        forms();
    }, [])

    return (
        <div className='forms__outer'>
            <div className='forms'>
                <div className='forms__buttons'>
                    <p className='forms__button' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.logo}`, color: context.color
                    }}>Добавить элемент в таблицу</p>
                    <div className='forms__submenu _hide'>
                        <div className='groups group'>
                            <p>Выберите группу или создайте новую:</p>
                            <input type='text' placeholder='Группа...' list='groupDatalist' />
                            <datalist id='groupDatalist'>
                                <option value='gr1'>gr1</option>
                                <option value='gr2'>gr2</option>
                            </datalist>
                        </div>

                        <div className='categories group'>
                            <p>Выберите категорию или создайте новую:</p>
                            <input type='text' placeholder='Категория...' list='catDatalist' />
                            <datalist id='catDatalist'>
                                <option value='cat1'>cat1</option>
                                <option value='cat1'>cat1</option>
                                <option value='cat1'>cat1</option>
                                <option value='cat1'>cat1</option>
                                <option value='cat1'>cat1</option>
                                <option value='cat1'>cat1</option>
                            </datalist>
                        </div>

                        <div className='value group'>
                            <p>Сумма:</p>
                            <input type='number' placeholder='Введите сумму' />
                        </div>

                        <div className='comment group'>
                            <p>Комментарий (не обязательно):</p>
                            <input type='text' placeholder='Введите комментарий' />
                        </div>

                        <button className='forms__submit' type='button' style={{
                            background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.menu}`, color: context.color
                        }}>Добавить</button>

                    </div>
                </div>

                <div className='forms__buttons'>
                    <p className='forms__button' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.logo}`, color: context.color
                    }}>Добавить группу</p>
                    <div className='forms__submenu _hide'>
                        <div className='groups group'>
                            <p>Введите название группы:</p>
                            <input type='text' placeholder='Название новой группы...' />
                        </div>
                        <button className='forms__submit' type='button' style={{
                            background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.menu}`, color: context.color
                        }}>Добавить</button>
                    </div>

                </div>

                <div className='forms__buttons'>
                    <p className='forms__button' style={{
                        background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.logo}`, color: context.color
                    }}>Удалить группу</p>
                    <div className='forms__submenu _hide'>
                        <div className='groups group'>
                            <p>Выберите группу:</p>
                            <select name='groupDelete'>
                                <option value='gr1'>gr1</option>
                                <option value='gr1'>gr1</option>
                                <option value='gr1'>gr1</option>
                            </select>
                        </div>
                        <button className='forms__submit' type='button' style={{
                            background: `linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), ${context.menu}`, color: context.color
                        }}>Удалить</button>
                    </div>
                </div>

            </div>
        </div>
    );
}