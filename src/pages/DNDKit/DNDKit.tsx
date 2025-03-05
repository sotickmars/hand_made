import React, { FC, useState, useCallback } from 'react';
import {
  DndContext,
  closestCenter,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  useSensor,
  useSensors,
  DragStartEvent,
  DragEndEvent,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable';
import { Grid } from './Grid';
import { SortableItem } from './SortableItem';
import { Item } from './Item';
import * as S from './styled';

export const DNDKit: FC = () => {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, i) => (i + 1).toString())
  );
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id);
  }, []);
  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id && over?.id !== null) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }, []);
  const handleDragCancel = useCallback(() => {
    setActiveId(null);
  }, []);

  return (
    <S.DndContext>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <SortableContext
          items={items}
          strategy={rectSortingStrategy}
          disabled={isDisabled}
        >
          <Grid columns={4}>
            {items.map((id) => (
              <SortableItem
                key={id}
                id={id}
                changeStatusDrag={(status: boolean) => {
                  setIsDisabled(status);
                }}
              />
            ))}
          </Grid>
        </SortableContext>
        <DragOverlay adjustScale style={{ transformOrigin: '0 0 ' }}>
          {activeId ? <Item id={activeId} isDragging /> : null}
        </DragOverlay>
      </DndContext>
    </S.DndContext>
  );
};
