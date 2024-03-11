"use server";
import prisma from "@/utils/db";
import {revalidatePath} from "next/cache";
import {redirect} from "next/navigation";
import { z } from "zod";

export const createTask = async (formData) => {
  const content = formData.get("content");
  await prisma.task.create(
    {
      data: {
        content
      }
    });
  revalidatePath("/tasks")
}


export const createTaskCustom = async (prevState, formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const content = formData.get("content");
  const Task = z.object({
    content: z.string().min(5)
  })
  try {
    Task.parse({ content });
    await prisma.task.create(
      {
        data: {
          content
        }
      });
    revalidatePath("/tasks")
    return { message : "success!"};
  } catch (err) {
    return { message : "error!"};
  }
}

export const deleteTask = async (prevState, formData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = formData.get("id");
  const Task = z.object({
    id: z.string().min(5)
  })
  try {
    Task.parse({ id });
    await prisma.task.delete(
      {
        where: {
          id
        }
      });
    revalidatePath("/tasks")
    return { message : "success!"};
  } catch (err) {
    return { message : "error!"};
  }
}

export const getAllTasks = async () => {
  return prisma.task.findMany({
    orderBy: {
      createdAt: "desc"
    }
  });
}

export const updateTask = async (formData) => {
  const id = formData.get('id');
  const content = formData.get("content");
  const completed = null !== formData.get("completed");
  await prisma.task.update( {
    where: {
      id
    },
    data: {
      content,
      completed
    }
  });

  revalidatePath("/tasks");
  redirect("/tasks");
}


export const getTask = async (id) => {
  return prisma.task.findUnique({
    where: {
      id
    }
  });
}